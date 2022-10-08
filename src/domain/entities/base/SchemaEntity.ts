import type { JSONSchemaType } from 'ajv';
import Ajv from 'ajv';

const ajv = new Ajv();

class SchemaEntity<T> {
  constructor(params: T, schema: JSONSchemaType<T>) {
    const validate = ajv.compile(schema);
    const isValid = validate(params);
    if (!isValid) {
      throw new Error(
        'SchemaValidateError: the data you provided is illegal！'
      );
    }
  }
}

export default SchemaEntity;
