const required = (value: unknown) =>
  value ? true : "Feld darf nicht leer sein";

const minLength = (field: string, length: number) => (value: unknown) => {
  if (typeof value !== "string" && !Array.isArray(value)) {
    return true;
  }

  if (value.length >= length) {
    return true;
  }

  return `${field} muss mindestens ${length} Zeichen lang sein`;
};

const maxLength = (field: string, length: number) => (value: unknown) => {
  if (typeof value !== "string" && !Array.isArray(value)) {
    return true;
  }

  if (value.length <= length) {
    return true;
  }

  return `${field} darf max. ${length} Zeichen lang sein`;
};

const matches = (fields: string, otherValue: unknown) => (value: unknown) =>
  otherValue === value ? true : `${fields} stimmen nicht überein`;

export const useRules = () => {
  return { required, minLength, maxLength, matches };
};
