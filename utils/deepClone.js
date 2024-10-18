export function deepClone(obj) {
  // Проверяем, является ли obj объектом и не null
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Возвращаем значение, если оно не объект
  }

  // Создаём новую переменную, которая будет клоном
  const clone = Array.isArray(obj) ? [] : {};

  // Рекурсивно копируем все свойства объекта
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}
