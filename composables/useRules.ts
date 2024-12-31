const required = (field: string) => (value: unknown) =>
  value ? true : `${field} fehlt`;

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

export const useRules = () => {
  return { required, minLength, maxLength };
};
