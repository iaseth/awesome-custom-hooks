
# awesome-custom-hooks

{% for hook in hooks %}
* `{{ hook.name }}`

	- [{{ hook.prod_src_path }}](https://github.com/iaseth/awesome-custom-hooks/blob/master/src/prod/{{ hook.entry }}.ts)
	- [{{ hook.dev_src_path }}](https://github.com/iaseth/awesome-custom-hooks/blob/master/src/dev/{{ hook.entry }}Debug.ts)
	- `{{ hook.get_return_statement() }}`
{% endfor %}
