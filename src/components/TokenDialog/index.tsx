import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import { useState } from 'react'

export function TokenDialog(props: { setToken: (item: string) => void }) {
  const [token, inputToken] = useState('')
  return (
    <Dialog.Root open={true}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Input Your Token</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Use token to fetch dictionary
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Token
            </Text>
            <TextField.Root value={token} onChange={(v) => inputToken(v.target.value)} placeholder="Enter your token" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button onClick={() => props.setToken(token)}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
