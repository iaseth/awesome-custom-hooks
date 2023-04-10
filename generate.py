import os
import sys


class CustomHook:
	def __init__(self, entry):
		self.entry = entry
		self.name = entry.split("/")[-1]
		self.path = f"{entry}.ts"
		self.fullpath = f"src/{entry}.ts"

	def print(self):
		print(self)

	def get_return_statement(self):
		filetext = open(self.fullpath).read()
		filelines = [x.strip() for x in filetext.split("\n")]
		return_statements = [x for x in filelines if x.startswith("return ")]
		return_statements.append("Not found")
		return return_statements[0]


	def __str__(self):
		return f"CustomHook \"{self.name}\" ({self.fullpath})"


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
		HOOK_LIST_MD += f"\t- [{hook.fullpath}](https://github.com/iaseth/awesome-custom-hooks/blob/master/src/{hook.entry}.ts)\n"
		HOOK_LIST_MD += f"\t- `{hook.get_return_statement()}`"
		HOOK_LIST_MD += "\n"

	preadme_text = open("PREADME.md").read()
	readme_text = preadme_text.replace("[[HOOK_LIST_MD]]", HOOK_LIST_MD)
	with open("README.md", "w") as f:
		f.write(readme_text)
		print(f"saved: README.md")


def create_modules(hooks):
	for hook in hooks:
		filepath = hook.fullpath
		if os.path.isfile(filepath):
			print(f"Exists: {filepath}")
		else:
			with open(filepath, "w") as f:
				f.write("")
				print(f"Created: {filepath}")


def generate_index_ts(hooks):
	text = ""
	for hook in hooks:
		text += f"import {{ {hook.name} }} from './{hook.entry}';\n"

	text += "\n\n\n"
	text += "const Awesome = {\n"
	for hook in hooks:
		text += f"\t{hook.name},\n"

	text += "};\n\n"
	text += "export default Awesome;\n"

	INDEX_TS_PATH = "src/index.ts"
	with open(INDEX_TS_PATH, "w") as f:
		f.write(text)
		print(f"saved: {INDEX_TS_PATH}")


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
	else:
		print("No command provided.")


if __name__ == '__main__':
	main()
