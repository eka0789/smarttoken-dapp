type Uploaded<T> = { type: 'UPLOADING' } | { type: 'UPLOADED', value: T }


export type {
  Uploaded
}