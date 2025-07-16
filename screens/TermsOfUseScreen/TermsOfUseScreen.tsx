import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";

export default function TermsOfUseScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>
          Публичная оферта на предоставление доступа к информационно
          аналитическому сервису «StampScan»
        </Text>
        <Text style={styles.subtitle}>(редакция от «__» ________ 2025 г.)</Text>

        <Text style={styles.section}>1. Общие положения</Text>
        <Text style={styles.text}>
          1.1. Настоящий документ является публичным предложением (офертой) ИП
          Шультайс Татьяна Владимировна, ИНН 550506462245, ОГРНИП
          325774600261284 (далее — «Компания»), адресованным любому
          дееспособному лицу (далее — «Пользователь»).
        </Text>
        <Text style={styles.text}>
          1.2. Полным и безоговорочным акцептом оферты считается регистрация
          Пользователя на сайте stampscan.ru либо в мобильном приложении
          «StampScan».
        </Text>

        <Text style={styles.section}>2. Термины и определения</Text>
        <Text style={styles.text}>
          • Сервис — веб сайт и мобильные приложения «StampScan»,
          предназначенные для поиска и распознавания клейм на фарфоровых
          изделиях.
        </Text>
        <Text style={styles.text}>
          • Каталог — база данных клейм, доступная бесплатно через веб
          интерфейс.
        </Text>
        <Text style={styles.text}>
          • Распознавание — запрос к нейронной модели с фотографией клейма для
          автоматического определения производителя и периода изготовления.
        </Text>
        <Text style={styles.text}>
          • Подписка — платный тариф, предоставляющий расширенный функционал
          Сервиса.
        </Text>

        <Text style={styles.section}>3. Предмет оферты</Text>
        <Text style={styles.text}>
          Компания предоставляет Пользователю доступ к Сервису в объёме,
          соответствующем выбранному тарифному плану; Пользователь обязуется
          соблюдать условия оферты и оплачивать услуги согласно разделу 4.
        </Text>

        <Text style={styles.section}>4. Тарифы и порядок расчётов</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              План
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
              Стоимость
            </Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 2 }]}>
              Содержимое
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>Web Catalog — Free</Text>
            <Text style={[styles.cell, { flex: 1 }]}>0 ₽</Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              Неограниченный доступ к каталогу клейм, фильтры, избранное.
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>Try (моб.)</Text>
            <Text style={[styles.cell, { flex: 1 }]}>0 ₽</Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              2 бесплатных распознавания из камеры/галереи.
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>Pro M</Text>
            <Text style={[styles.cell, { flex: 1 }]}>399 ₽ / месяц</Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              Неограниченные распознавания, история запросов, офлайн кэш
              каталога.
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 1 }]}>Pro Y</Text>
            <Text style={[styles.cell, { flex: 1 }]}>3 999 ₽ / год</Text>
            <Text style={[styles.cell, { flex: 2 }]}>
              То же, что Pro M, экономия двух месяцев.
            </Text>
          </View>
        </View>

        <Text style={styles.text}>
          4.1. Промо цена 399 ₽ / 3 999 ₽ действует до 01 июля 2025 г. Компания
          вправе изменить стоимость, уведомив Пользователя минимум за 30 дней.
        </Text>
        <Text style={styles.text}>
          4.2. Оплата:{"\n"}• Пользователи РФ — ЮKassa (карты, СБП, Mir Pay);
          {"\n"}• Пользователи за пределами РФ — Stripe (карты, Apple Pay /
          Google Pay).
        </Text>
        <Text style={styles.text}>
          4.3. После списания средств параметр `pro_expires_at` в профиле
          Пользователя продлевается на оплаченный период.
        </Text>
        <Text style={styles.text}>
          4.4. Цены указаны в рублях. Компания применяет УСН «Доходы»; НДС не
          начисляется.
        </Text>

        <Text style={styles.section}>5. Возвраты</Text>
        <Text style={styles.text}>
          5.1. Месячная подписка не возвращается, кроме недоступности Сервиса
          &gt; 24 ч подряд.
        </Text>
        <Text style={styles.text}>
          5.2. При годовой подписке возврат рассчитывается пропорционально
          полным неиспользованным месяцам.
        </Text>
        <Text style={styles.text}>
          5.3. В случае прекращения работы Сервиса Компания возвращает
          неиспользованную часть оплаты или предоставляет офлайн версию каталога
          и локальную модель распознавания.
        </Text>

        <Text style={styles.section}>6. Права и обязанности</Text>
        <Text style={styles.text}>
          • Пользователь использует Сервис только в личных целях, если иное не
          согласовано.
        </Text>
        <Text style={styles.text}>
          • Компания обеспечивает доступность ≥ 99 % в месяц, исключая плановые
          работы (≤ 8 ч/мес).
        </Text>
        <Text style={styles.text}>
          • Компания вправе улучшать/изменять функционал без существенного
          ухудшения потребительских свойств.
        </Text>

        <Text style={styles.section}>7. Ограничение ответственности</Text>
        <Text style={styles.text}>
          Компания не несёт ответственности за косвенные убытки, вызванные
          использованием либо невозможностью использования Сервиса.
        </Text>

        <Text style={styles.section}>8. Персональные данные</Text>
        <Text style={styles.text}>
          Обработка данных осуществляется согласно Политике конфиденциальности
          (https://stampscan.ru/privacy). Регистрация означает согласие
          Пользователя на обработку данных.
        </Text>

        <Text style={styles.section}>9. Срок действия и изменение оферты</Text>
        <Text style={styles.text}>
          Оферта действует бессрочно с момента публикации. Компания может
          изменять условия, размещая новую редакцию на
          https://stampscan.ru/offer.
        </Text>

        <Text style={styles.section}>10. Реквизиты компании</Text>
        <Text style={styles.text}>ИП Шультайс Татьяна Владимировна</Text>
        <Text style={styles.text}>
          127576, г. Москва, ул. Новгородская, д. 14, к. 2
        </Text>
        <Text style={styles.text}>
          ИНН 550506462245, ОГРНИП 325774600261284
        </Text>
        <Text style={styles.text}>
          р/с 40802810538720005903 в ПАО Сбербанк, БИК 0445252225
        </Text>
        <Text style={styles.text}>
          Эл. почта поддержки: tanja.shultais@yandex.com
        </Text>
        <Text style={styles.text}>Телефон: будет указан дополнительно</Text>
        <Text style={styles.text}>
          Акцептуя оферту, Пользователь подтверждает, что ознакомлен с её
          условиями, принимает их в полном объёме и обязуется их соблюдать.
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
