import { useTranslation } from "react-i18next";
import { Row } from "../Row";

export const NoTasks = () => {
  const { t } = useTranslation();
  return (
    <Row>
      {t("noTasks")}
    </Row>
  );
}
