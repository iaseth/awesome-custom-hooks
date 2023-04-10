import os
import sys


def get_hook_paths():
	hooklist_text = open("hooklist.txt").read()
	hooklist_lines = [x.strip() for x in hooklist_text.split("\n")]
	hook_paths = [x for x in hooklist_lines if x]
	return hook_paths


def generate_readme():
	hook_paths = get_hook_paths()
	HOOK_LIST_MD = ""
	for hook_path in hook_paths:
		hook = hook_path.split("/")[-1]
		HOOK_LIST_MD += f"* `{hook}`\n"

	preadme_text = open("PREADME.md").read()
	readme_text = preadme_text.replace("[[HOOK_LIST_MD]]", HOOK_LIST_MD)
	with open("README.md", "w") as f:
		f.write(readme_text)
		print(f"saved: README.md")


def create_modules():
	hook_paths = get_hook_paths()
	for hook_path in hook_paths:
		filepath = f"src/{hook_path}.ts"
		if os.path.isfile(filepath):
			print(f"Exists: {filepath}")
		else:
			with open(filepath, "w") as f:
				f.write("")
				print(f"Created: {filepath}")


def generate_index_ts():
	hook_paths = get_hook_paths()
	text = ""
	for hook_path in hook_paths:
		hook_name = hook_path.split("/")[-1]
		text += f"import {{ {hook_name} }} from './{hook_path}';\n"

	text += "\n\n\n"
	text += "const Awesome = {\n"
	for hook_path in hook_paths:
		hook_name = hook_path.split("/")[-1]
		text += f"\t{hook_name},\n"

	text += "};\n\n"
	text += "export default Awesome;\n"

	INDEX_TS_PATH = "src/index.ts"
	with open(INDEX_TS_PATH, "w") as f:
		f.write(text)
		print(f"saved: {INDEX_TS_PATH}")


def main():
	args = sys.argv[1:]
	command = None if len(args) == 0 else args[0].lower()

	if command == "readme":
		generate_readme()
	elif command == "create":
		create_modules()
	elif command == "ts":
		generate_index_ts()
	else:
		print("No command provided.")


if __name__ == '__main__':
	main()
