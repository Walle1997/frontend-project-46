### Hexlet tests and linter status:
[![Actions Status](https://github.com/Walle1997/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Walle1997/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/5b9f743e398804c9d2ba/maintainability)](https://codeclimate.com/github/Walle1997/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/5b9f743e398804c9d2ba/test_coverage)](https://codeclimate.com/github/Walle1997/frontend-project-46/test_coverage)

## Описание

#Консольное приложение для вычисления разницы в структурных данных двух файлов в форматах JSON и YAML.

## 1. Скопируйте данный репозиторий локально

# Команда SSH
```
git clone git@github.com:Walle1997/frontend-project-46.git
```

# Команда HTTP
```
git clone https://github.com/Walle1997/frontend-project-46.git
```

## 2. Установите необходимые пакеты

```
make install
```
## 3. Установите локальные пакеты

```
npm link
```

### Посмотреть документацию
# Команда:
```
gendiff -h
```
<a href="https://asciinema.org/a/HHmGA63HqZBl54PgW6rqy3VpW" target="_blank"><img src="https://asciinema.org/a/HHmGA63HqZBl54PgW6rqy3VpW.svg" /></a>

### Рекурсивное сравнение json файлов
# Команда:
```
gendiff __fixtures__/file1.json __fixtures__/file2.json
```
<a href="https://asciinema.org/a/uZfZfYhfzMEHy72I2ybQHqqC0" target="_blank"><img src="https://asciinema.org/a/uZfZfYhfzMEHy72I2ybQHqqC0.svg" /></a>

### Рекурсивное сравнение yaml файлов
# Команда:
```
gendiff __fixtures__/file1.yaml __fixtures__/file2.yaml
```
<a href="https://asciinema.org/a/ypIRq21G8undl4A9OFMnknpoQ" target="_blank"><img src="https://asciinema.org/a/ypIRq21G8undl4A9OFMnknpoQ.svg" /></a>

### Плоское сравнение json файлов
# Команда:
```
gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
```
<a href="https://asciinema.org/a/5F5Ii6EtLgJNKv73qxucoVJvo" target="_blank"><img src="https://asciinema.org/a/5F5Ii6EtLgJNKv73qxucoVJvo.svg" /></a>

### Плоское сравнение yaml файлов
# Команда:
```
gendiff -f plain __fixtures__/file1.yaml __fixtures__/file2.yaml
```
<a href="https://asciinema.org/a/tD2CwGO6vQbcm2A8EpCJp7u03" target="_blank"><img src="https://asciinema.org/a/tD2CwGO6vQbcm2A8EpCJp7u03.svg" /></a>

### Вывод в json. Формат: json
# Команда:
```
gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
```
<a href="https://asciinema.org/a/Nnv2ayWEvEkgtY15V7py0e5Uw" target="_blank"><img src="https://asciinema.org/a/Nnv2ayWEvEkgtY15V7py0e5Uw.svg" /></a>

