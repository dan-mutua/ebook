import {Box, Container, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabs from "@/src/components/shared/ui/CustomTab";
import Head from "next/head";
import SEO from "@/src/components/layout/SEO";

const AboutPage = () => {
    return (
      <Box className="wrapper">
        <Head>
          <title>Book Store | About</title>
          <SEO
            title={"About us"}
            description={"Lorem ipsum"}
            url={""}
            twitterCard={""}
            image={""}
          ></SEO>
        </Head>
        <Container>
          <Box className="wrapper_container">
            <Typography
              variant="h1"
              style={{
                fontSize: "26px",
              }}
            >
              About Us
            </Typography>
            <br></br>
            <Typography variant="body1">
              eBookpatners is the first online market where people can easily
              buy their chosen eBooks easily. It’s a biggest eBook and most
              popular market in the world.
              <br></br>
              
              
            </Typography>

            <br></br>
            <CustomTabs></CustomTabs>
          </Box>
        </Container>
      </Box>
    );

}

export default AboutPage;