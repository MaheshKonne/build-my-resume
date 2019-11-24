import React, {Fragment} from "react";
import styled from "styled-components";
import data from '../../../static/data';
import Header from "../../Header";
import {theme} from "../../../lib/theme";
import Diamond from "../../SquareDiamond";
import Content from "../../Content";
import Chip from "@material-ui/core/Chip";
import {FlexCell, FlexContainer} from "../../FlexBox";

const TemplateHeader = styled.header`
    padding: 40px;
    background: ${props => props.theme.primary};
    border-radius: 5px 5px 0 0;
    text-align: center;
    color: ${theme.white};
`;

const TemplateFooter = styled.footer`
    height: 40px;
    background: ${props => props.theme.primary};
    border-radius: 0 0 5px 5px;
    color: white;
`;

const FooterWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const TemplateBody = styled.section`
    border: 2px solid ${props => props.theme.quaternary};
`;

const Section = styled.section`
    background-color: ${props => props.background}
`;

const ContentWrapper = styled.section`
    padding: 30px 50px;
`;

const FlexContainerElem = FlexContainer({
    "padding-top": "10px",
    "margin-bottom": "30px"
})('div');

const FlexCellElem = FlexCell({
    "min-width": "300px",
    "margin-right": "30px"
})('div');

const Template = ({template='canva-purple-modern-resume'}) => {
    const selectedTheme = theme[template];

    return (
        <Fragment>
            <TemplateHeader theme={selectedTheme}>
                <Header color={theme.white}>{data.name}</Header>
                <Header color={theme.white} heading="h4">{data.role}</Header>
            </TemplateHeader>
            <TemplateBody theme={selectedTheme}>
                <ContentWrapper>
                    <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">{data.profile.title}</Header>
                    <Content>{data.profile.description}</Content>
                </ContentWrapper>
                <Section background={selectedTheme.quaternary}>
                    <ContentWrapper>
                        <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">{data.experience.title}</Header>
                        {data.experience.details.map((item, i) => (
                            <FlexContainerElem key={`${item.company}-${i}`}>
                                <FlexCellElem>
                                    <Content>{item.role}</Content>
                                    <Content>{item.company}</Content>
                                    <Content>{item.duration}</Content>
                                </FlexCellElem>
                                <Content>{item.description}</Content>
                            </FlexContainerElem>
                        ))}
                    </ContentWrapper>
                </Section>
                <ContentWrapper>
                    <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">{data.education.title}</Header>
                    {data.education.details.map(item => (
                        <FlexCellElem key={item.year}>
                            <Content>{item.course}</Content>
                            <Content>{item.university}</Content>
                            <Content>{item.year}</Content>
                            <Content>{item.grade}</Content>
                        </FlexCellElem>
                    ))}
                </ContentWrapper>
                <ContentWrapper>
                    <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">SKILLS</Header>
                    {data.skills.map(skill => <Chip key={skill} variant="outlined" color="red" label={skill} />)}
                </ContentWrapper>
            </TemplateBody>
            <TemplateFooter theme={selectedTheme}>
                <FooterWrapper>
                    <Header heading="h4" color={theme.white}>{data.contact.email}</Header>
                    <Diamond />
                    <Header heading="h4" color={theme.white}>{data.contact.website}</Header>
                    <Diamond />
                    <Header heading="h4" color={theme.white}>{data.contact.phone}</Header>
                </FooterWrapper>
            </TemplateFooter>
        </Fragment>
    );
};

export default Template;