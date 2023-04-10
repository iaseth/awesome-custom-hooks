import os
import sys


def get_hook_names():
	hooklist_text = open("hooklist.txt").read()
	hooklist_lines = [x.strip() for x in hooklist_text.split("\n")]
	hook_names = [x for x in hooklist_lines if x]
	return hook_names


def generate_readme():
	hook_names = get_hook_names()
	HOOK_LIST_MD = ""
	for hook_name in hook_names:
		HOOK_LIST_MD += f"* `{hook_name}`\n"

	preadme_text = open("PREADME.md").read()
	readme_text = preadme_text.replace("[[HOOK_LIST_MD]]", HOOK_LIST_MD)
	with open("README.md", "w") as f:
		f.write(readme_text)
		print(f"saved: README.md")


def create_modules():
	hook_names = get_hook_names()
	for hook_name in hook_names:
		filepath = f"src/{hook_name}.ts"
		if os.path.isfile(filepath):
			print(f"Exists: {filepath}")
		else:
			with open(filepath, "w") as f:
				f.write("")
				print(f"Created: {filepath}")


def main():
	args = sys.argv[1:]
	command = None if len(args) == 0 else args[0].lower()

	if command == "readme":
		generate_readme()
	elif command == "create":
		create_modules()
	else:
		print("No command provided.")


if __name__ == '__main__':
	main()
