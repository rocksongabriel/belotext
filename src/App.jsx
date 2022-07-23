import React, {useState} from 'react'
import {
  Box,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  VStack,
  Stack,
  Button,
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react'

const TextCard = (props) => {
  return <GridItem
      p={4}
      boxShadow='lg'
      bg={'gray.50'}
      borderRadius={10}
      colSpan={[4, 2, 4, null, 2]}
    >
    {/* Header with text and copy button  */}
    <Flex justify='space-between' pb={2}>
      <Text alignSelf={'center'} fontSize='xl' fontFamily={'sans-serif'} fontWeight={'bold'}>Split {props.number}</Text>
      <Button alignSelf={'center'} variant='ghost' colorScheme={'yellow'}>Copy Text</Button>
    </Flex>

    {/* Actual Text */}
    <Box>
    Lorem consequatur harum atque iure molestias Cum maiores provident ad fugit minima quis.
    ibusdam recusandae eligendi quos cum veritatis Nisi explicabo quo necessitatibus beatae
    omnis ipsam Repellendus eveniet natus voluptates.
    </Box>
  </GridItem>
}

export default function App () {
  const [limitNumber, setLimitNumber] = useState(160)
  const [text, setText] = useState('')

  const handleButtonClick = () => {
    console.log(limitNumber)
    console.log(text)
  }

  return <>
    <Box px={[5, 10]}>
      {/* BeloText Big Header  */}
      <Text fontSize={['3xl', '4xl']} color={'red.600'} fontFamily={'cursive'} fontWeight="bold" textAlign={'center'} pt={[4]} pb={1}>BeloText</Text>
      <Text fontSize={['medium', 'lg']} color='gray.600' fontWeight='bold' textAlign={['left', 'left', 'center']} pb={[10]}>
        Are you tired of always typing in limits? Type all your text, and split them into the limits.
      </Text>

      <Stack direction={['column', null, null, 'row']} spacing={10}>
        {/* Form Container with two inputs and one button */}
        <VStack spacing={5} w={['100%', null, null, '50%', '33.33%']}>
          <NumberInput
            onChange={value => setLimitNumber(value)}
            w={'full'}
            value={limitNumber}
            defaultValue={160}
            allowMouseWheel
          >
            <NumberInputField
              borderColor={'twitter.600'}
              borderWidth={'2px'}
              _hover={{ borderColor: 'twiter.400' }}
              placeholder={'Enter text limit'}
            />
            <NumberInputStepper>
              <NumberIncrementStepper
                bg='green.300'
                _active={{ bg: 'green.300' }}
              />
              <NumberDecrementStepper
                bg='red.300'
                _active={{ bg: 'red.300' }}
              />
            </NumberInputStepper>
          </NumberInput>

          <Textarea
            value={text}
            onChange={event => setText(event.target.value)}
            rows={15}
            borderColor={'twitter.600'}
            borderWidth={'2px'}
            _hover={{ borderColor: 'twitter.400' }}
            placeholder={'Enter / Paste your actual text here ...'}
          />

          {/* Button to Perform the magic  */}
          <Button
            onClick={handleButtonClick}
            colorScheme={'facebook'}
          >Make Magic Happen</Button>
        </VStack>

        {/* The Split Texts in Cards  */}
        <Grid w={['100%', null, null, '50%', '66.66%']} gap={5} pb={10} templateColumns={'repeat(4, 1fr)'}>
          {
            [1, 2, 3, 4, 5].map((number) => (
              <TextCard number={number} key={number} />
            ))
          }
      </Grid>
      </Stack>
    </Box>
  </>
}
