import json
import os
import sys


def get_file_info_as_json(filepath):
	filetext = open(filepath).read()
	filelines = filetext.split("\n")
	strippedlines = [x.strip() for x in filelines]
	first_words = [x.split(" ")[0] for x in strippedlines]

	fileinfo = {}
	fileinfo["path"] = filepath

	fileinfo["linesCount"] = len(filelines)
	fileinfo["emptyLinesCount"] = strippedlines.count("")
	fileinfo["importsCount"] = first_words.count("import")
	fileinfo["exportsCount"] = first_words.count("export")
	fileinfo["returnsCount"] = first_words.count("return")

	return fileinfo


class CustomHook:
	def __init__(self, entry):
		self.entry = entry
		self.name = entry.split("/")[-1]
		self.debugName = self.name + "Debug"

		self.capname = self.name[0].upper() + self.name[1:]
		self.exampleComponentName = self.capname + "Example"
		self.filename = self.name + ".ts"
		self.path = f"{entry}.ts"
		self.prod_src_path = f"src/prod/{entry}.ts"
		self.dev_src_path = f"src/dev/{entry}.ts"

		self.prod_js_path = f"dist/prod/{entry}.js"
		self.dev_js_path = f"dist/dev/{entry}Debug.js"
		self.prod_dts_path = f"dist/prod/{entry}.d.ts"
		self.dev_dts_path = f"dist/dev/{entry}Debug.d.ts"

	def as_json_object(self):
		jo = {}
		jo["name"] = self.name
		jo["capname"] = self.capname
		jo["exampleComponentName"] = self.exampleComponentName
		jo["entry"] = self.entry
		jo["filename"] = self.filename

		jo["prodSrcPath"] = self.prod_src_path
		jo["devSrcPath"] = self.dev_src_path

		jo["prodJsPath"] = self.prod_js_path
		jo["devJsPath"] = self.dev_js_path
		jo["prodDtsPath"] = self.prod_dts_path
		jo["devDtsPath"] = self.dev_dts_path

		jo["srcFileInfo"] = get_file_info_as_json(self.prod_src_path)
		jo["jsFileInfo"] = get_file_info_as_json(self.prod_js_path)
		jo["dtsFileInfo"] = get_file_info_as_json(self.prod_dts_path)

		jo["returnStatement"] = self.get_return_statement()
		return jo

	def print(self):
		print(self)

	def get_return_statement(self):
		filetext = open(self.prod_src_path).read()
		filelines = [x.strip() for x in filetext.split("\n")]
		return_statements = [x for x in filelines if x.startswith("return ")]
		return return_statements[-1] if len(return_statements) > 0 else "Not found"


	def __str__(self):
		return f"CustomHook \"{self.name}\" ({self.prod_src_path})"


def get_hooks():
	hooklist_text = open("hooklist.txt").read()
	hooklist_lines = [x.strip() for x in hooklist_text.split("\n")]
	hook_paths = [x for x in hooklist_lines if x]
	hooks = [CustomHook(x) for x in hook_paths]
	return hooks


def generate_readme(hooks):
	HOOK_LIST_MD = ""
	for hook in hooks:
		HOOK_LIST_MD += f"* `{hook.name}`\n\n"
		HOOK_LIST_MD += f"\t- [{hook.prod_src_path}](https://github.com/iaseth/awesome-custom-hooks/blob/master/src/prod/{hook.entry}.ts)\n"
		HOOK_LIST_MD += f"\t- [{hook.dev_src_path}](https://github.com/iaseth/awesome-custom-hooks/blob/master/src/dev/{hook.entry}Debug.ts)\n"
		HOOK_LIST_MD += f"\t- `{hook.get_return_statement()}`"
		HOOK_LIST_MD += "\n"

	preadme_text = open("PREADME.md").read()
	readme_text = preadme_text.replace("[[HOOK_LIST_MD]]", HOOK_LIST_MD)
	with open("README.md", "w") as f:
		f.write(readme_text)
		print(f"saved: README.md")


def create_modules(hooks):
	for hook in hooks:
		filepath = hook.prod_src_path
		if os.path.isfile(filepath):
			print(f"Exists: {filepath}")
		else:
			with open(filepath, "w") as f:
				f.write("")
				print(f"Created: {filepath}")


def generate_index_ts(hooks):
	text = ""
	for hook in hooks:
		text += f"import {{ {hook.name} }} from './prod/{hook.entry}';\n"
		text += f"import {{ {hook.debugName} }} from './dev/{hook.entry}Debug';\n"

	text += "\n\n\n"
	text += "const Awesome = {\n"
	for hook in hooks:
		text += f"\t{hook.name},\n"
		text += f"\t{hook.debugName},\n"

	text += "};\n\n"
	text += "export default Awesome;\n"

	INDEX_TS_PATH = "src/index.ts"
	with open(INDEX_TS_PATH, "w") as f:
		f.write(text)
		print(f"saved: {INDEX_TS_PATH}")


def generate_hooks_json(hooks):
	jo = {}
	jo["hooks"] = [hook.as_json_object() for hook in hooks]

	hooks_json_path = "hooks.min.json"
	with open(hooks_json_path, "w") as f:
		json.dump(jo, f)
		print(f"saved: {hooks_json_path}")


def create_examples(hooks):
	for hook in hooks:
		example_filepath = f"nextdocs/src/examples/{hook.entry}Example.tsx"
		if os.path.isfile(example_filepath):
			print(f"Exists: {example_filepath}")
		else:
			dirname = os.path.dirname(example_filepath)
			if not os.path.isdir(dirname):
				os.mkdir(dirname)
				print(f"Created: {dirname}")

			text = f"import {{ {hook.name} }} from '../../../../dist';\n\n\n\n"
			text += f"export function {hook.exampleComponentName} () {{\n\treturn <div>{hook.exampleComponentName}</div>;\n}}\n"
			with open(example_filepath, "w") as f:
				f.write(text)
			print(f"Created: {example_filepath}")

	examples_indx_tsx_filepath = "nextdocs/src/examples/index.tsx"
	examples_indx_tsx_filetext = ""
	for hook in hooks:
		examples_indx_tsx_filetext += f"export {{ {hook.exampleComponentName} }} from './{hook.entry}Example.tsx'\n"

	with open(examples_indx_tsx_filepath, "w") as f:
		f.write(examples_indx_tsx_filetext)
	print(f"Saved: {examples_indx_tsx_filepath}")


def main():
	hooks = get_hooks()

	args = sys.argv[1:]
	command = None if len(args) == 0 else args[0].lower()

	if command == "readme":
		generate_readme(hooks)
	elif command == "create":
		create_modules(hooks)
	elif command == "ts":
		generate_index_ts(hooks)
	elif command == "json":
		generate_hooks_json(hooks)
	elif command == "examples":
		create_examples(hooks)
	else:
		print("No command provided.")


if __name__ == '__main__':
	main()
