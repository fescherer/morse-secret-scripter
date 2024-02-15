import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label: string
}

export function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div className="my-2 w-full">
      <label className="text-sm font-medium text-slate-500" htmlFor={label}>{label}</label>
      <textarea id={label} className="min-h-16 w-full rounded border border-slate-500 bg-slate-50 p-2 text-sm text-slate-600 placeholder:text-slate-400 focus:outline-slate-800" {...props} />
    </div>
  )
}
