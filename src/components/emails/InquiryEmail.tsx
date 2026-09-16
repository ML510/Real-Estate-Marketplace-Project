import {
    Body,
    Button,
    Column,
    Container,
    Font,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "react-email";
import type { CSSProperties } from "react";

interface InquiryEmailProps {
    senderEmail: string;
    senderName: string;
    senderPhone?: string;
    ownerName: string;
    message: string;
    propertyTitle: string;
    propertyPrice: string;
}

export default function RealEstateInquiryEmail({
    senderEmail,
    senderName,
    senderPhone,
    ownerName,
    message,
    propertyTitle,
    propertyPrice,
}: InquiryEmailProps) {
    const previewText = `New inquiry for ${propertyTitle}`;
    const propertyUrl = "https://example.com/properties";
    const replyUrl = `mailto:${senderEmail}?subject=${encodeURIComponent(
        `Property inquiry from ${senderName}`
    )}`;

    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Inter"
                    fallbackFontFamily="Helvetica"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
                <style>{`
          @media only screen and (max-width: 480px) {
            .pie-container { width: 100% !important; }
            .pie-stack-col { display: block !important; width: 100% !important; }
            .pie-property-image { width: 100% !important; height: auto !important; }
            .pie-btn-col { display: block !important; width: 100% !important; padding: 0 !important; }
            .pie-btn-col + .pie-btn-col { padding-top: 10px !important; }
            .pie-btn { width: 100% !important; text-align: center !important; }
          }
        `}</style>
            </Head>
            <Preview>{previewText}</Preview>
            <Body style={styles.body}>
                <Section>
                    <Text>Dear {ownerName}</Text>
                </Section>
                <Container className="pie-container" style={styles.container}>
                    <Section style={styles.masthead}>
                        <Text style={styles.mastheadText}>Property Inquiry</Text>
                    </Section>

                    <Section style={styles.section}>
                        <Img
                            className="pie-property-image"
                            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
                            width="560"
                            height="280"
                            alt={propertyTitle}
                            style={styles.propertyImage}
                        />
                        <Heading as="h1" style={styles.propertyTitle}>
                            {propertyTitle}
                        </Heading>
                        <Text style={styles.propertyPrice}>{propertyPrice}</Text>
                    </Section>

                    <Hr style={styles.hr} />

                    <Section style={styles.section}>
                        <Text style={styles.bodyText}>
                            Hi {ownerName.split(" ")[0]}, you have a new inquiry as the property owner for this listing.
                        </Text>
                    </Section>

                    <Section style={styles.messageCard}>
                        <Row>
                            <Column>
                                <Text style={styles.label}>From</Text>
                                <Text style={styles.buyerName}>{senderName}</Text>
                                <Text style={styles.buyerContact}>
                                    {senderEmail}
                                    {senderPhone ? ` · ${senderPhone}` : ""}
                                </Text>
                            </Column>
                        </Row>
                        <Hr style={styles.messageDivider} />
                        <Text style={styles.label}>Message</Text>
                        <Text style={styles.messageText}>{message}</Text>
                    </Section>

                    <Section style={styles.section}>
                        <Row>
                            <Column className="pie-btn-col" style={styles.btnColPrimary}>
                                <Button
                                    className="pie-btn"
                                    href={replyUrl}
                                    style={{ ...styles.button, ...styles.buttonPrimary }}
                                >
                                    Reply to Inquiry
                                </Button>
                            </Column>
                            <Column className="pie-btn-col" style={styles.btnColSecondary}>
                                <Button
                                    className="pie-btn"
                                    href={propertyUrl}
                                    style={{ ...styles.button, ...styles.buttonSecondary }}
                                >
                                    View Property
                                </Button>
                            </Column>
                        </Row>
                    </Section>

                    <Hr style={styles.hr} />

                    <Section style={styles.section}>
                        <Text style={styles.footerText}>
                            This inquiry was sent through your listing on Example Realty. Replying goes directly to {senderName} at {senderEmail}.
                        </Text>
                        <Text style={styles.footerText}>
                            <Link href={propertyUrl} style={styles.footerLink}>
                                View listing
                            </Link>
                            {"  ·  "}
                            <Link href="https://example.com/settings/notifications" style={styles.footerLink}>
                                Manage notification settings
                            </Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const ink = "#1c2b39";
const body = "#3d3a34";
const muted = "#7a7568";
const paper = "#fbfaf7";
const border = "#e4ddcd";
const brass = "#a67c3d";
const brassDark = "#8c6530";

const styles: Record<string, CSSProperties> = {
    body: {
        backgroundColor: "#f1efe9",
        fontFamily: "Inter, Helvetica, Arial, sans-serif",
        color: body,
        margin: 0,
        padding: "24px 0",
    },
    container: {
        maxWidth: "560px",
        margin: "0 auto",
        backgroundColor: paper,
        border: `1px solid ${border}`,
        borderRadius: "10px",
        overflow: "hidden",
    },
    masthead: {
        backgroundColor: ink,
        padding: "14px 24px",
    },
    mastheadText: {
        color: "#f1efe9",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.2px",
        margin: 0,
    },
    section: {
        padding: "20px 24px",
    },
    propertyImage: {
        width: "100%",
        height: "auto",
        borderRadius: "6px",
        marginBottom: "14px",
    },
    propertyTitle: {
        fontSize: "19px",
        fontWeight: 700,
        color: ink,
        margin: "0 0 4px",
        lineHeight: 1.3,
    },
    propertyAddress: {
        fontSize: "14px",
        color: muted,
        margin: "0 0 6px",
    },
    propertyPrice: {
        fontSize: "15px",
        fontWeight: 700,
        color: brassDark,
        margin: 0,
    },
    hr: {
        borderColor: border,
        margin: 0,
    },
    bodyText: {
        fontSize: "14.5px",
        lineHeight: 1.6,
        color: body,
        margin: 0,
    },
    messageCard: {
        margin: "0 24px 20px",
        padding: "16px 18px",
        backgroundColor: "#ffffff",
        border: `1px solid ${border}`,
        borderRadius: "8px",
    },
    label: {
        fontSize: "11.5px",
        color: muted,
        margin: "0 0 2px",
    },
    buyerName: {
        fontSize: "15px",
        fontWeight: 600,
        color: ink,
        margin: 0,
    },
    buyerContact: {
        fontSize: "13px",
        color: muted,
        margin: "2px 0 0",
    },
    messageDivider: {
        borderColor: border,
        margin: "12px 0",
    },
    messageText: {
        fontSize: "14.5px",
        lineHeight: 1.6,
        color: body,
        margin: "4px 0 0",
        whiteSpace: "pre-line",
    },
    btnColPrimary: {
        width: "60%",
        paddingRight: "6px",
    },
    btnColSecondary: {
        width: "40%",
        paddingLeft: "6px",
    },
    button: {
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 600,
        borderRadius: "6px",
        padding: "11px 16px",
        textDecoration: "none",
    },
    buttonPrimary: {
        backgroundColor: brass,
        color: "#ffffff",
    },
    buttonSecondary: {
        backgroundColor: "#ffffff",
        color: ink,
        border: `1px solid ${border}`,
    },
    footerText: {
        fontSize: "12px",
        lineHeight: 1.6,
        color: muted,
        margin: "0 0 6px",
    },
    footerLink: {
        color: brassDark,
        textDecoration: "underline",
    },
};