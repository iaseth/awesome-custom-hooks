


def main():
	hooklist_text = open("hooklist.txt").read()
	hooklist_lines = [x.strip() for x in hooklist_text.split("\n")]
	hook_names = [x for x in hooklist_lines if x]

	HOOK_LIST_MD = ""
	for hook_name in hook_names:
		HOOK_LIST_MD += f"* `{hook_name}`\n"

	preadme_text = open("PREADME.md").read()
	readme_text = preadme_text.replace("[[HOOK_LIST_MD]]", HOOK_LIST_MD)
	with open("README.md", "w") as f:
		f.write(readme_text)
		print(f"saved: README.md")


if __name__ == '__main__':
	main()
