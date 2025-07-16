import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>
          Политика конфиденциальности сервиса «StampScan»
        </Text>
        <Text style={styles.subtitle}>(редакция от «__» ________ 2025 г.)</Text>

        <Text style={styles.section}>1. Общие положения</Text>
        <Text style={styles.text}>
          Настоящая Политика определяет порядок обработки и защиты персональных
          данных пользователей веб сайта stampscan.ru и мобильных приложений
          «StampScan» (далее — «Сервис»), принадлежащих ИП Шультайс Татьяна
          Владимировна (далее — «Компания», «мы»).
        </Text>
        <Text style={styles.text}>
          1.2. Компания обрабатывает персональные данные в соответствии с
          Федеральным законом РФ № 152 ФЗ «О персональных данных», Регламентом
          (ЕС) 2016/679 (GDPR) и иной применимой нормативной базой.
        </Text>
        <Text style={styles.text}>
          1.3. Регистрируясь в Сервисе или продолжая его использовать,
          пользователь (далее — «Вы») подтверждает, что ознакомился с настоящей
          Политикой и согласен с её условиями.
        </Text>

        <Text style={styles.section}>2. Какие данные мы собираем</Text>
        <Text style={styles.text}>
          • Учётные данные: email, идентификатор учётной записи Google или
          Яндекс, страна.
        </Text>
        <Text style={styles.text}>
          • Фотографии клейм, загруженные Вами для распознавания.
        </Text>
        <Text style={styles.text}>
          • Платёжная информация: токены ЮKassa/Stripe (номер карты не хранится
          на наших серверах).
        </Text>
        <Text style={styles.text}>
          • Файлы cookie и технические данные (IP адрес, тип устройства, ОС,
          язык).
        </Text>
        <Text style={styles.text}>
          • Данные использования: время входа, количество распознаваний, выбор
          фильтров
        </Text>

        <Text style={styles.section}>3. Цели обработки</Text>
        <Text style={styles.text}>
          • Предоставление доступа к каталогу и функции распознавания.
        </Text>
        <Text style={styles.text}>
          • Заведение и сопровождение подписки (биллинг, чеки, уведомления).
        </Text>
        <Text style={styles.text}>
          • Улучшение Сервиса (аналитика Firebase, краш репорты).
        </Text>
        <Text style={styles.text}>
          • Выполнение требований законодательства (бухгалтерия, налоги).
        </Text>

        <Text style={styles.section}>4. Правовые основания</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              Юрисдикция
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              Основание
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>РФ</Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              ст. 6 ФЗ 152: п.1 (договор) и п.2 (закон)
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>ЕС / EEA</Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              Art. 6 GDPR: b) исполнение договора; c) юридическая обязанность;
              f) легитимный интерес
            </Text>
          </View>
        </View>

        <Text style={styles.section}>5. Хранение данных</Text>
        <Text style={styles.text}>
          • Учётные данные — пока существует аккаунт + 3 года после закрытия.
        </Text>
        <Text style={styles.text}>
          • Фотографии — 30 дней, затем удаляются или обезличиваются.
        </Text>
        <Text style={styles.text}>• Логи — 90 дней, затем агрегируются.</Text>

        <Text style={styles.section}>
          6. Передача и трансграничная передача
        </Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              Получатель
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              Цель
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              Основание передачи
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>ЮKassa (РФ)</Text>
            <Text style={[styles.cell, { flex: 1 }]}>Оплата в РФ</Text>
            <Text style={[styles.cell, { flex: 1 }]}>Договор, ст.6 ФЗ 152</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              Stripe, Inc. (США/ЕС)
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>Оплата вне РФ</Text>
            <Text style={[styles.cell, { flex: 1 }]}>SCC 2021 + DPA</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>
              Google LLC (Firebase)
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>
              Авторизация, аналитика
            </Text>
            <Text style={[styles.cell, { flex: 1 }]}>SCC 2021, ISO 27001</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>Яндекс ID (РФ)</Text>
            <Text style={[styles.cell, { flex: 1 }]}>Авторизация</Text>
            <Text style={[styles.cell, { flex: 1 }]}>Договор</Text>
          </View>
        </View>

        <Text style={styles.section}>
          7. Обязательность предоставления данных
        </Text>
        <Text style={styles.text}>
          Предоставление email адреса является договорным требованием: без него
          Сервис не может создать учётную запись. Загрузка фотографий является
          добровольной; без неё доступна только функция просмотра каталога.
        </Text>

        <Text style={styles.section}>8. Автоматизированные решения</Text>
        <Text style={styles.text}>
          Распознавание клейма нейронной моделью является справочной функцией и
          не порождает юридически значимых последствий для пользователя.
        </Text>

        <Text style={styles.section}>9. Ваши права</Text>
        <Text style={styles.text}>
          Вы вправе запрашивать доступ, исправление или удаление данных;
          переносимость (Art. 20 GDPR); отзыв согласия; подать жалобу в
          Роскомнадзор или в надзорный орган ЕС.
        </Text>
        <Text style={styles.text}>
          Запросы направляйте на info@alisaleben.de или почтой (адрес ниже).
        </Text>

        <Text style={styles.section}>10. Контакты операторов</Text>
        <Text style={styles.text}>
          Оператор РФ: ИП Шультайс Татьяна Владимировна
        </Text>
        <Text style={styles.text}>
          127576, г. Москва, ул. Новгородская, д. 14, к. 2
        </Text>
        <Text style={styles.text}>Эл. почта: tanja.shultais@yandex.com</Text>
        <Text style={styles.text}>
          EU Representative / Data Controller (EU): Einzelunternehmen Alisa
          Schultais
        </Text>
        <Text style={styles.text}>Postfach 1351, 53790 Siegburg, Germany</Text>
        <Text style={styles.text}>
          St Nr.: 220/5428/3950 (Finanzamt Siegburg)
        </Text>
        <Text style={styles.text}>E mail: info@alisaleben.de</Text>
        <Text style={styles.text}>
          Надзорный орган: Landesbeauftragte für Datenschutz und
          Informationsfreiheit NRW (ldi.nrw.de)
        </Text>

        <Text style={styles.section}>11. Защита информации</Text>
        <Text style={styles.text}>• TLS 1.3 для всех соединений;</Text>
        <Text style={styles.text}>• шифрование «в покое» (AES 256);</Text>
        <Text style={styles.text}>
          • двухфакторная аутентификация администраторов;
        </Text>
        <Text style={styles.text}>• регулярный аудит безопасности.</Text>

        <Text style={styles.section}>13. Cookie</Text>
        <Text style={styles.text}>
          Используем необходимые cookie (аутентификация) и аналитические cookie
          Firebase. Отключение может ограничить функциональность.
        </Text>

        <Text style={styles.section}>14. Изменения политики</Text>
        <Text style={styles.text}>
          Актуальная версия доступна на https://stampscan.ru/privacy.
          Существенные изменения будут сообщены по email или push уведомлением
          за 10 дней до вступления в силу.
        </Text>

        <Text style={styles.subtitle}></Text>
        <Text style={styles.text}>
          Используя Сервис, вы подтверждаете согласие с настоящей Политикой
          конфиденциальности.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.BgcColor,
  },
  scroll: {
    paddingBottom: 48,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.BlackColor,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    color: Colors.GrayColor,
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 4,
    color: Colors.BlackColor,
  },
  text: {
    fontSize: 14,
    color: Colors.BlackColor,
    lineHeight: 20,
    marginBottom: 8,
  },

  table: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingVertical: 8,
  },
  cell: {
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.BlackColor || "#000",
  },
  headerCell: {
    fontWeight: "bold",
  },
});
