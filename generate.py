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


def main():
	args = sys.argv[1:]
	command = None if len(args) == 0 else args[0].lower()

	if command == "readme":
		generate_readme()
	else:
		print("No command provided.")


if __name__ == '__main__':
	main()
