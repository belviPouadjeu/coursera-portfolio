import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


const socials = [
    { icon: faEnvelope, url: "mailto: hello@example.com" },
    { icon: faGithub, url: "https://github.com" },
    { icon: faLinkedin, url: "https://www.linkedin.com" },
    { icon: faMedium, url: "https://medium.com" },
    { icon: faStackOverflow, url: "https://stackoverflow.com" },
];


const Header = () => {
    const { isOpen, onToggle } = useDisclosure();


    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        }
        onToggle(); // close menu on click (mobile)
    };


    return (
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
        bg="#18181b"
        color="white"
        >
        <Box maxW="1280px" mx="auto" px={{ base: 4, md: 8 }} py={4} zIndex={1100}>
            <Flex justify="space-between" align="center">
            {/* Socials */}
            <HStack spacing={4}>
                {socials.map(({ icon, url }, index) => (
                <Link key={index} href={url} isExternal>
                    <FontAwesomeIcon icon={icon} size="lg" />
                </Link>
                ))}
            </HStack>


            {/* Hamburger menu (mobile) */}
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onToggle}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                variant="ghost"
                color="white"
                aria-label="Toggle Navigation"
            />


            {/* Navigation links (desktop) */}
            <HStack
                spacing={8}
                display={{ base: "none", md: "flex" }}
            >
                <Link href="#projects-section" onClick={handleClick("projects")}>
                Projects
                </Link>
                <Link href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
                </Link>
            </HStack>
            </Flex>


            {/* Mobile Nav Menu */}
            {isOpen && (
            <Stack mt={4} spacing={4} display={{ md: "none" }}>
                <Link href="#projects-section" onClick={handleClick("projects")}>
                Projects
                </Link>
                <Link href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
                </Link>
            </Stack>
            )}
        </Box>
        </Box>
    );
};


export default Header;




