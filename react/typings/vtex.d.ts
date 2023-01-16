type VtexSchemaProps = {
  [key: string]: {
    title: string;
    description: string;
    type: string;
    default: string;
  };
};

type VtexSchema = {
  schema: {
    title: string;
    description: string;
    type: string;
    properties: VtexSchemaProps;
  };
};
