import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components/macro';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
    subtitle?: string;
};

const Screen = styled.div`
    ${tw`min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden`};
    background: radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.18), transparent 25%),
        radial-gradient(circle at 80% 0%, rgba(56, 189, 248, 0.2), transparent 30%),
        radial-gradient(circle at 10% 80%, rgba(129, 140, 248, 0.14), transparent 25%),
        linear-gradient(135deg, #0f172a 0%, #0b1221 48%, #0f172a 100%);

    &::after {
        content: '';
        ${tw`absolute inset-0 pointer-events-none`};
        background: radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.06), transparent 35%),
            radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.08), transparent 30%);
        mix-blend-mode: screen;
    }
`;

const Card = styled.div`
    ${tw`relative grid w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl border border-white/30`};
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(18px);
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 768px) {
        grid-template-columns: 2fr 3fr;
    }

    &::before {
        content: '';
        ${tw`absolute inset-0 pointer-events-none`};
        background: linear-gradient(120deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    }
`;

const LeftPanel = styled.div`
    ${tw`relative h-full text-white p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600`};

    &::after {
        content: '';
        ${tw`absolute inset-0 opacity-30`};
        background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.55), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(30, 41, 59, 0.55), transparent 40%);
        filter: blur(10px);
        pointer-events: none;
    }
`;

const LeftContent = styled.div`
    ${tw`relative z-10 space-y-4`};
`;

const Pill = styled.span`
    ${tw`inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-white/15 border border-white/30`};
    backdrop-filter: blur(6px);
`;

const LeftTitle = styled.h3`
    ${tw`text-2xl md:text-3xl font-semibold leading-tight drop-shadow-lg`};
`;

const LeftSubtitle = styled.p`
    ${tw`text-sm md:text-base text-white/80 leading-relaxed max-w-md`};
`;

const Mascot = styled.div`
    ${tw`relative z-10 flex flex-col items-center justify-end mt-6`};

    img {
        ${tw`w-40 md:w-52 drop-shadow-2xl`};
    }

    span {
        ${tw`mt-4 text-xs uppercase tracking-[0.2em] text-white/70`};
    }
`;

const Content = styled.div`
    ${tw`relative bg-white/90 backdrop-blur-xl p-8 md:p-10`};
`;

const TitleWrap = styled.div`
    ${tw`flex items-center gap-3`};
`;

const Accent = styled.span`
    ${tw`h-10 w-10 rounded-2xl flex items-center justify-center text-white text-lg font-semibold`};
    background: linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%);
    box-shadow: 0 10px 35px rgba(79, 70, 229, 0.2);
`;

const Title = styled.h2`
    ${tw`text-3xl md:text-4xl font-semibold text-slate-800 leading-tight`};
`;

const Subtitle = styled.p`
    ${tw`mt-2 text-sm md:text-base text-slate-500 leading-relaxed`};
`;

const Footer = styled.p`
    ${tw`text-center text-white/70 text-xs mt-6`};
`;

export default forwardRef<HTMLFormElement, Props>(({ title, subtitle, ...props }, ref) => (
    <Screen>
        <Form {...props} ref={ref} css={tw`w-full`}>
            <Card>
                <LeftPanel>
                    <LeftContent>
                        <Pill>Welcome back</Pill>
                        <LeftTitle>Your control center for every server.</LeftTitle>
                        <LeftSubtitle>
                            Keep your infrastructure running smoothly with an interface designed for clarity, comfort,
                            and quick actions.
                        </LeftSubtitle>
                    </LeftContent>
                    <Mascot>
                        <img src={'/assets/svgs/pterodactyl.svg'} alt={'Pterodactyl mascot'} />
                        <span>Powered by Pterodactyl</span>
                    </Mascot>
                </LeftPanel>
                <Content>
                    <TitleWrap>
                        <Accent>⚡</Accent>
                        {title && <Title>{title}</Title>}
                    </TitleWrap>
                    <Subtitle>
                        {subtitle ||
                            'Handle every account action with clarity and focus. Review any notices below and continue when you are ready.'}
                    </Subtitle>
                    <FlashMessageRender css={tw`mb-4 mt-6`} />
                    <div css={tw`space-y-5`}>{props.children}</div>
                </Content>
            </Card>
        </Form>
        <Footer>
            &copy; 2015 - {new Date().getFullYear()}&nbsp;
            <a
                rel={'noopener nofollow noreferrer'}
                href={'https://pterodactyl.io'}
                target={'_blank'}
                css={tw`no-underline text-white/70 hover:text-white`}
            >
                Pterodactyl Software
            </a>
        </Footer>
    </Screen>
));
