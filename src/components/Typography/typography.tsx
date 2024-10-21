import styled from "styled-components";

type headTag = "H1" | "H2" | "H3" | "H4";
interface propsFont {
    tag: headTag,
    fontSize: number,
    lineHeight: number,
    fontWeight: number,
    children?: string,
}
const font = '"Poppins", sans-serif';

function changeStyle({tag, fontSize, lineHeight, fontWeight}: propsFont){
    const fontShorthand = `font: ${fontWeight} ${fontSize}px/${lineHeight}% ${font};`;

    if(tag === "H1") {
        const Head = styled.h1`${fontShorthand}`;
        return Head;
    }

    if(tag === "H2") {
        const Head = styled.h2`${fontShorthand}`;
        return Head;
    }

    if(tag === "H3") {
        const Head = styled.h3`${fontShorthand}`;
        return Head;
    }

    if(tag === "H4") {
        const Head = styled.h4`${fontShorthand}`;
        return Head;
    }
}

function Typography({ tag, fontSize, lineHeight, fontWeight, children }: propsFont){
    const Head = changeStyle({tag, fontSize, lineHeight, fontWeight})!;

    return(
        <Head>
            {children}
        </Head>
    )
};

export default Typography;