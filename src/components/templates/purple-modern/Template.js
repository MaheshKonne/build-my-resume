import React, {Fragment} from "react";
import styled from "styled-components";
import data from '../../../static/data';
import Header from "../../Header";
import {theme} from "../../../lib/theme";
import Diamond from "../../SquareDiamond";
import Content from "../../Content";


const TemplateHeader = styled.header`
    padding: 40px;
    background: ${props => props.theme.primary};
    border-radius: 5px 5px 0 0;
    text-align: center;
    color: ${theme.white};
`;

const TemplateFooter = styled.footer`
    height: 30px;
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
    background-color: ${props => props.background || theme.white}
`;

const ContentWrapper = styled.section`
    padding: 30px 50px;
`;

const Template = ({template='canva-purple-modern-resume'}) => {
    const selectedTheme = theme[template];

    return (
        <Fragment>
            <TemplateHeader theme={selectedTheme}>
                <Header>{data.name}</Header>
                <Header heading="h4">{data.role}</Header>
            </TemplateHeader>
            <TemplateBody theme={selectedTheme}>
                <ContentWrapper>
                    <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">{data.profile.title}</Header>
                </ContentWrapper>
                <Section background={selectedTheme.quaternary}>
                    <ContentWrapper>
                        <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">{data.experience.title}</Header>
                        {data.experience.details.map(item => (
                            <>
                                <Content>{item.role}</Content>
                                <Content>{item.company}</Content>
                                <Content>{item.duration}</Content>
                                <Content>{item.description}</Content>
                            </>
                        ))}
                    </ContentWrapper>
                </Section>
                <ContentWrapper>
                    <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">{data.education.title}</Header>
                    {data.education.details.map(item => (
                        <>
                            <Content>{item.course}</Content>
                            <Content>{item.university}</Content>
                            <Content>{item.year}</Content>
                            <Content>{item.grade}</Content>
                        </>
                    ))}
                </ContentWrapper>
                <ContentWrapper>
                    <Header heading="h2" color={selectedTheme.primary} letterSpacing="3px">SKILLS</Header>
                    {data.skills.map(skill => <Content>{skill}</Content>)}
                </ContentWrapper>
            </TemplateBody>
            <TemplateFooter theme={selectedTheme}>
                <FooterWrapper>
                    <Header heading="h4">{data.contact.email}</Header>
                    <Diamond />
                    <Header heading="h4">{data.contact.website}</Header>
                    <Diamond />
                    <Header heading="h4">{data.contact.phone}</Header>
                </FooterWrapper>
            </TemplateFooter>
        </Fragment>
    );
};

export default Template;