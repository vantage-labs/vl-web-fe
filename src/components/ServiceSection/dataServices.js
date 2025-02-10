import { useTranslation } from "react-i18next";
import icon1 from "../../images/icon/research.gif";
import icon2 from "../../images/icon/durability.gif";
import icon3 from "../../images/icon/digital-tra.gif";
import icon4 from "../../images/icon/business-develop.gif";
import icon5 from "../../images/icon/search.gif";
// import icon6 from '../../images/icon/warning.gif'

export const DataServicesOne = () => {
  const { t } = useTranslation();
  return [
    {
      Id: 1,
      sImg: icon1,
      title: t("servicesSection.services.0.headline"),
      slug: "custom-web-architecture",
      thumb1: "High-Performance",
      thumb2: "Scalability",
      description: t("servicesSection.services.0.label"),
    },
    {
      Id: 2,
      sImg: icon2,
      title: t("servicesSection.services.1.headline"),
      slug: "ui-ux-design",
      thumb1: "User Experience",
      thumb2: "Interface Design",
      description: t("servicesSection.services.1.label"),
    },
    {
      Id: 3,
      sImg: icon3,
      title: t("servicesSection.services.2.headline"),
      slug: "performance-optimization",
      thumb1: "Speed",
      thumb2: "Efficiency",
      description: t("servicesSection.services.2.label"),
    },
    {
      Id: 4,
      sImg: icon4,
      title: t("servicesSection.services.3.headline"),
      slug: "global-expansion",
      thumb1: "Market Entry",
      thumb2: "Strategy",
      description: t("servicesSection.services.3.label"),
    },
    {
      Id: 5,
      sImg: icon5,
      title: t("servicesSection.services.4.headline"),
      slug: "web-development",
      thumb1: "Scalability",
      thumb2: "Security",
      description: t("servicesSection.services.4.label"),
    },
  ];
};
