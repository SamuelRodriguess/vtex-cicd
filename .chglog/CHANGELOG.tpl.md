{{ define "title" }}# {{ .Title }}{{ end }}

{{ range .Releases }}
## {{ .Name }}

{{ range .Commits }}
- {{ .Message }} ({{ .Hash.Short }})
{{ end }}

{{ end }}
