type IVtexMakeImageURL = {
  acronymEntity: string
  documentId: string
  field: string
  file: string
}

export const VtexMakeImageURL = ({
  acronymEntity,
  documentId,
  field,
  file,
}: IVtexMakeImageURL): string => {
  const document = `${documentId}/${field}/attachments/${file}`

  return `/api/dataentities/${acronymEntity}/documents/${document}`
}
