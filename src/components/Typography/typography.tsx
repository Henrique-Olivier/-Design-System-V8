import styled from "styled-components";

type size = "desktop" | "tablet" | "mobile" | "main";
type headTag = "H1" | "H2" | "H3" | "H4";
type paragraphTag = "body-L" | "body-M" | "body-M-regular" | "body-S" | "body-S-regular" | "body-XS";

const font = '"Poppins", sans-serif';
const styleMapping = {
    desktop: {
        'H1': styled.h1`font: 500 44px/128% ${font}`,
        'H2': styled.h2`font: 500 30px/120% ${font}`,
        'H3': styled.h3`font: 600 22px/124% ${font}`,
        'H4': styled.h4`font: 700 18px/132% ${font}`,
    },
    tablet: {
        'H1': styled.h1`font: 500 32px/124% ${font}`,
        'H2': styled.h2`font: 500 24px/128% ${font}`,
        'H3': styled.h3`font: 600 22px/124% ${font}`,
        'H4': styled.h4`font: 700 18px/132% ${font}`,
    },
    mobile: {
        'H1': styled.h1`font: 600 29px/124% ${font}`,
        'H2': styled.h2`font: 600 22px/128% ${font}`,
        'H3': styled.h3`font: 700 19px/128% ${font}`,
        'H4': styled.h4`font: 700 16px/128% ${font}`,
    },
    main: {
       'body-L': styled.p`font: 400 22px/144% ${font}`,
       'body-M': styled.p`font: 300 18px/132% ${font}`,
       'body-M-regular': styled.p`font: 400 18px/132% ${font}`,
       'body-S': styled.p`font: 300 16px/148% ${font}`,
       'body-S-regular': styled.p`font: 400 16px/148% ${font}`,
       'body-XS': styled.h1`font: 400 14px/140% ${font}`,
    }
}

function changeStyle(size: size, tag: headTag | paragraphTag) {
    return styleMapping[size][tag];
}

function Typography({size, tag, children}: {size: size, tag: headTag | paragraphTag, children: string}){
    const ResponsiveText = changeStyle(size, tag);
    return(
        <ResponsiveText>
            {children}
        </ResponsiveText>
    )
};

export default Typography;