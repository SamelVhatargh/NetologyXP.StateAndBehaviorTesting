# NetologyXP.StateAndBehaviorTesting
* Практические занятия по UnitTesting (курс Нетологии http://netology.ru/programs/xp)
* Лекция: Тесты на поведение и тесты на состояние.

## План
1. Что можно проверить тестами?
    * Возвращаемое значение
    * Изменение состояния объекта\системы
    * Вызов метода другого объекта
2. Определение - Тест на состояние (value based\state based)
    * Проверка, как изменилось состояние системы (SUT) после вызова метода
3. Определение - Тест на поведение
    * Проверка того, как объект отправляет соообщения (вызывает методы) других объектов.
    * Тестирование действия (Action testing)
4. Пример - поливочная система во дворе (во сколько поливать, сколько раз в день и какое количество воды)
    * State based - Запустить систему на 12 часов, за это время она должна 3 раза полить дерево. Потом проверить почву у дереву (состояние дерева).
    * Interaction - Установить датчик, запоминающий количество воды и время полива. В конце дня проврить, что датчик был вызван определенное количество раз в определенное время.
5. Пишем тест на поведение и тест на состояние на один и тот же сценарий
    * Бармен отправляет смс боссу, что напиток закончился 
6. Когда удобнее использовать тест на состояние?
    *  Примеры
7. Когда удобнее использовать тесты на поведение?
    * Кэш
    * Публичное внешнее API
8. Лайфхак - как заставить тесты на поведение выглядеть как тесты на состояние.
9. Тесты на поведение\состояние влияют на Дизайн.
    * Показать на примере кода. Например, свойсто barmen.wasSmsSent
10. 2 Школы - классичиская и мокистская (outside-in\inside-out)
    * В чем плюсы минусы с точки зрения дизайна, устойчивости тестов, независимости и т.д. (по пунктам статьи Фаулера)
11. Выводы - что применять?
12. Домашняя работа.