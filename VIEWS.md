# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępnosci stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - kazda kolumna = 1 stolik
    - każdy wiersz = 30 min
    - ma przypominać widok tygodnia w kalendarzu Googla, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rerzerwacji
  - umożliwia edycję i zapisanie zmian

-`/tables/booking/new`

- analogicznie do powyższej, bez początkowych informacji

- `/tables/events/:id`
  - analogicznie do powyższej, bez początkowych informacji

-`/tables/events/new`

- analogicznie do powyższej, bez początkowych informacji

# Widok kelnera

-`/waiter`

- tabela
  - w wierszach stoliki
  - w kolumnach różne rodzaje informacji(status danego stolika, czas od ostatniej aktywnosci)
  - w ostatniej kolumnie dostępne akcje dla danego stolika

-`/waiter/order/new`

- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
- zamówienie (zamówione prrodukty z opcjami i ceną)
- kwotę zamówienia

-`/waiter/order/:id`

- jak powyżej

# Widok kuchni

-`/kitchen`

- wyświetla listę zamówień w kolejności ich złożenia
  - numer stolika (lub zamówienia zdalnego)
  - pełne informacje dot. zamówionych dań
- na liscie musi być możliwość oznaczenia zamówienia jako zrealizowane
