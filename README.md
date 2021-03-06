Работа с тестовым заданием
==================


## Суть задания ##

Необходимо сверстать два блока, различающиеся по сложности. 
Сложность normal для всех, сложность hard для тех, кто  претендует на должность разработчика уровня middle.

В проекте уже заведены многие блоки, на которые необходимо ориентироваться. 
PSD-файла нет, так как изображения уже нарезаны, цвета заведены в переменных.
Верстать необходимо с применением модифицированного БЭМ. block__element. Модификаторы пишутся в виде is-modify.

Задания взяты из реального проекта и уже релизованы на итоговом сайте, ваши результаты использоваться нами не будут.

Тестовое задание поможет понять скорость вовлечения в проекты; типовые задачи по вёрскте в фонде будут аналогичными: поддерживать и разрабатывать новые блоки. 


## Установка gulp и запуск проекта ##

Для работы необходимо:

1. Склонировать репозиторий или скачать файлы.
2. Установить [node.js](https://nodejs.org/en/download/).
3. Установить gulp глобально, команда в терминале: npm i -g gulp.
4. Установить пакеты, используемые при разработке. В папке /_src/ запустить команду: npm i
5. Запустить сборщик командой терминала gulp в папке /_src/

## Основные используемые технологии ##
* gulp
* sass
* bem

### Сложность normal ###

Блок promo-participate, который дублирует верхнее меню и добавляет кнопку «Принять участие».
Необходимо реализовать адаптивность, не забыть про ретину. 
Файлы для бэкграунда уже лежат в папке img. (bg-participate.jpg и bg-participate@2x.jpg)

* [Скриншот обычной версии](_src/img/ref/promo-participate.jpg)
* [Скриншот адаптивной версии](_src/img/ref/promo-participate-mobile.jpg)


### Сложность hard ###

Блок timeline, реализующий механизм таймлайна. Приветствуется возможность беспроблемного изменения размера по ширине и высоте.
Должна быть возможность лёгкого добавления точек в произвольное место таймлайна.
При наведении на точку должен всплывать попап с дополнительным текстом.
Точкам и расстояниям между ними не обязательно располагаться по дате автоматически.

Адаптивность не нужна, на мобильной версии блок нужно скрывать. Не забыть про ретину. 
Файлы со спрайтами точек уже лежат в папке img (sprite-timeline-dots.png и sprite-timeline-dots@2x.png)

* [Скриншот обычной версии](_src/img/ref/timeline-normal.png)
* [Скриншот при наведении](_src/img/ref/timeline-hover.png)


## Результат ##

Результат нужно прислать в виде архива или ссылки на репозиторий на [n.skinteev@rybakovfond.ru](mailto:n.skinteev@rybakovfond.ru) с темой «Тестовое задание на вёрстку, ФИО».
В тексте письма укажите, сколько времени заняло выполнение задания, а также возникшие сложности.

Финальный результат с обоими блоками должен выглядеть так:
* [Скриншот обычной версии](_src/img/ref/all-normal.png)
* [Скриншот адаптивной версии](_src/img/ref/all-mobile.png)