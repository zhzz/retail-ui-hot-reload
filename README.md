# Проект для тестирования [skbkontur/retail-ui/pull/1311](skbkontur/retail-ui/pull/1311)

## Запуск

Переключаемся на ветку `react-hot-loader-1267` в репе **retail-ui**  и билдим проект:
```
yarn workspace retail-ui build
```

Далее, клонируем этот репозиторий в отдельную папку:
```
git clone git@github.com:zhzz/retail-ui-hot-reload.git hot-retail-ui
```

Находим в `hot-retail-ui/package.json` зависимость `@skbkontur/react-ui` и меням значение на свой локальный путь до собранного **retail-ui** из предыдущего шага:
```
"@skbkontur/react-ui": "C:\ ... \ ... \retail-ui\packages\retail-ui\build"
```

Устанавливаем зависимости в проекте `hot-retail-ui`:
```
yarn
```

И запускаем:
```
yarn dev
```

## Тестирование

Успешные сценарии: 
- элементы dropdown'ов выделяются при ховере;
- в modal между header и body нет лишнего отступа ([эталон](https://tech.skbkontur.ru/react-ui/0.45.0/#!/Modal/0));
- у примыкающей к инпуту кнопки нет скругления уголов справа;

Для сравнения, можно сбилдить ветку `master` репы **retail-ui**, переустановить зависимости и перезапустить этот проект.
