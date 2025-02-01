import { useTranslation } from "react-i18next";
import icon1 from '../../images/icon/research.gif'
import icon2 from '../../images/icon/durability.gif'
import icon3 from '../../images/icon/digital-tra.gif'
import icon4 from '../../images/icon/business-develop.gif'
// import icon5 from '../../images/icon/search.gif'
// import icon6 from '../../images/icon/warning.gif'

export const DataServicesOne = () => {
    const {t} = useTranslation()
    return(
        [
            {
                Id: '1',
                sImg: icon1,
                title: t("servicesSection.services.0.headline"),
                slug: 'Niche-research',
                thumb1: 'Strategy',
                thumb2: 'Consultation',
                description: t("servicesSection.services.0.label"),
            },
            {
                Id: '2',
                sImg: icon2,
                title: t("servicesSection.services.1.headline"),
                slug: 'Link-building',
                thumb1: 'Management',
                thumb2: 'Transfer',
                description: t("servicesSection.services.1.label"),
            },
            {
                Id: '3',
                sImg: icon3,
                title: t("servicesSection.services.2.headline"),
                slug: 'International-SEO',
                thumb1: 'Landing Page',
                thumb2: 'Plugins',
                description: t("servicesSection.services.1.label"),
            },
            {
                Id: '4',
                sImg: icon4,
                title: t("servicesSection.services.2.headline"),
                slug: 'Enterprise-SEO',
                thumb1: 'Consultation',
                thumb2: 'solution',
                description: t("servicesSection.services.1.label"),
            },
        ]
    )
}
