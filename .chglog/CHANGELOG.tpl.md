{{ define "title" }}# {{ .Title }}{{ end }}

{{ range .Sections }}
## {{ .Title }}

{{ range .Commits }}
- {{ .Message }} ({{ .Hash.Short }})
{{ end }}

{{ end }}
