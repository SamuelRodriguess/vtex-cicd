{{- /* Unreleased section with grouped commits */ -}}
{{- if .Unreleased.CommitGroups }}
## [Unreleased]

{{- range .Unreleased.CommitGroups }}
### {{ .Title }}

{{- range .Commits }}
- {{ if .Scope }}**{{ .Scope }}:** {{ end }}{{ .Subject }}
{{- end }}

{{ end }}
{{ end }}

{{- /* Past versions with date and grouped commits */ -}}
{{- range .Versions }}
## [{{ .Tag.Name }}] - {{ datetime "2006-01-02" .Tag.Date }}

{{- range .CommitGroups }}
### {{ .Title }}

{{- range .Commits }}
- {{ if .Scope }}**{{ .Scope }}:** {{ end }}{{ .Subject }}
{{- end }}

{{ end }}

{{ end }}

{{- /* Links for comparisons in repository */ -}}
{{- if .Versions }}
[Unreleased]: {{ .Info.RepositoryURL }}/compare/{{ (index .Versions 0).Tag.Name }}...HEAD
{{- range .Versions }}
{{- if .Tag.Previous }}
[{{ .Tag.Name }}]: {{ $.Info.RepositoryURL }}/compare/{{ .Tag.Previous.Name }}...{{ .Tag.Name }}
{{- end }}
{{- end }}
{{- end }}
