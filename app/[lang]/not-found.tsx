import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function Page404() {
  const t = await getTranslations()

  return (
    <>
     <Flex align={'center'} direction={'column'} width={'100%'} height={'100%'} minHeight={'400px'} justify={'center'} py={'8'} px={'5'}>
        <Heading size={'7'} color={'gray'}>#404</Heading>
        <Text size={'3'} mb={'5'} color={'gray'}>{'Unfortunately, there is no such page.'}</Text>
        <Link href={'/'}><Button color={'green'} size={'3'}>{t('back_home')}</Button></Link>
      </Flex>
    </>
  );
}
