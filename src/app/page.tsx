"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box m={"4rem"}>
      <Text fontWeight={700} fontSize={"32px"} mb={"1rem"}>
        our little respite.
      </Text>
      <Text w={"80%"} fontWeight={200}>
        What brings you joy? I think about things that bring you, me, or the
        person next to you on the commute, a little bit of happiness. What about
        those things makes you smile? Could I bring more of those elements
        together into a brand new plaything? Let me know :)
      </Text>
      <Text
        textAlign={"center"}
        fontWeight={600}
        fontSize={"28px"}
        my={"12rem"}
      >
        nothing yet... watch this space!
      </Text>
      <Text fontWeight={700} fontSize={"20px"} mb={"3px"}>
        in the meantime, tell me about you!
      </Text>
      <Text fontWeight={200}>
        I&apos;m always thinking about what&apos;s the next useful thing to
        build and I want to know your thoughts.
      </Text>
      <HStack mt={"15px"}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:amelia.tay.li.jia@gmail.com";
          }}
        >
          Drop me an email
        </Button>
        <Link href={"https://ameliatay.vercel.app"} target="_blank">
          <Button
            ml={"5px"}
            variant={"unstyled"}
            fontWeight={400}
            fontSize={"14px"}
          >
            Or visit my portfolio page
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
