import json
import os
import sys

import jinja2
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(os.path.abspath('./templates/')))

from awesomepy import CustomHook
from awesomepy import get_file_info_as_json



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


def create_dev_modules(hooks):
	for hook in hooks:
		hook.create_dev_module()


def generate_prod_hooks(hooks):
	for hook in hooks:
		hook.generate_prod_hook()


def generate_index_ts(hooks):
	index_ts_template = jinja_env.get_template("index_ts.txt")
	text = index_ts_template.render(hooks=hooks)

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

			text = f"import Awesome from '../../../../dist';\n\n\n\n"
			text += f"export function {hook.exampleComponentName} () {{\n\treturn <div>{hook.exampleComponentName}</div>;\n}}\n"
			with open(example_filepath, "w") as f:
				f.write(text)
			print(f"Created: {example_filepath}")

	examples_index_tsx_filepath = "nextdocs/src/examples/index.tsx"
	examples_index_tsx_filetext = ""
	for hook in hooks:
		examples_index_tsx_filetext += f"export {{ {hook.exampleComponentName} }} from './{hook.entry}Example.tsx'\n"

	with open(examples_index_tsx_filepath, "w") as f:
		f.write(examples_index_tsx_filetext)
	print(f"Saved: {examples_index_tsx_filepath}")


def main():
	hooks = get_hooks()

	args = sys.argv[1:]
	command = None if len(args) == 0 else args[0].lower()

	if command == "readme":
		generate_readme(hooks)
	elif command == "create":
		create_dev_modules(hooks)
	elif command == "prod":
		generate_prod_hooks(hooks)
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
