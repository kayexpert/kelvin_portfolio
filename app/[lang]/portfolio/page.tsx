import { Heading, Flex, Text,  Separator, Grid, Button, Card } from '@radix-ui/themes'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from 'next-view-transitions'
// import Link from 'next/link'

const get_portfolio = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/portfolio`)
  return await res.json() || []
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const t = await getTranslations('portfolios_page')
  // const project = portfolios?.find((p: any) => p.identifier === params.identifier);
  return {
  title: `${t('meta_title')}`,
  description: t('site_description'),
  icons: ['favicon.ico'],
  keywords: ['Kelvin Obodai'],
  openGraph: {
    type: 'website',
    title: `${t('meta_title')}`,
    description: t('site_description'),
    url: `${process.env.SERVER_URL}/portfolio`,
    images: ['favicon.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: `${t('meta_title')}`,
    description: t('site_description'),
    images: ['favicon.png'],
    site: `${process.env.SERVER_URL}`,
    creator: ''
  },
  metadataBase: new URL(`${process.env.SERVER_URL}`), 
}
}

export default async function Portfolio() {
  const t = await getTranslations('portfolios_page')
  const proj_t = await getTranslations('projects')
  const portfolios = await get_portfolio()


  return (
    <>
      <Flex mb={'5'} gap={'5'} align={'center'}>
        <Heading style={{ viewTransitionName: `page_title`, whiteSpace: 'nowrap' }}>{t('portfolio')}</Heading>
        <Separator size={'4'}  />
      </Flex >
      {/* {JSON.stringify(portfolios)} */}
      <Grid columns={{ initial: '1', sm: '2' }} gap={'5'}>
        {portfolios?.map((val: any, ind: any) => (         
          <Card size={'3'} key={ind}>
            <Flex direction={'column'} gap={'2'} >
              <Flex flexShrink={'0'} gap={'5'} align={'center'}>
               <Flex direction={'column'} >
                  <Text size={'4'} style={{ viewTransitionName: `portfolio_${val.id}_title` }}>{proj_t(`${val.id}.title`)}</Text>
                  <Text size={'2'} style={{ viewTransitionName: `portfolio_${val.id}_company` }}>{proj_t(`${val.id}.company`)}</Text>
                </Flex >
              </Flex>
              <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
                <Text size={'1'} style={{ viewTransitionName: `portfolio_${val.id}_scope` }}>{proj_t(`${val.id}.scope`)}</Text>
                <Flex gap={'3'}>
                  <Link href={`/portfolio/${val.id}`}><Button size={'1'} highContrast>{t('read_more')}</Button></Link>
                  {val.link && 
                  <Link href={val.link} target='_blank'><Button variant={'outline'} size={'1'}>{t('view_project')}</Button></Link>
                  }
                </Flex >
              </Flex>
            </Flex>
          </Card>
        ))}
        {/* <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={CiBank} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>Bank Developer Portal</Text>
                <Text size={'6'}>Stanbic Bank Ghana</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={RiMoneyDollarCircleFill} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>Sales Agent Portal</Text>
                <Text size={'6'}>MTN aYo Limited</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={IoMdAnalytics} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>Lucent Data Analytics</Text>
                <Text size={'6'}>Dataware Ghana</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={LuSchool} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>School Management System</Text>
                <Text size={'6'}>Schoolz - Osanim Systems</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={GiVote} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>HAG Voting System</Text>
                <Text size={'6'}>Humanitarian Awards Global</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={GrMultimedia} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>DABI Media Site</Text>
                <Text size={'6'}>Dabi TV</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={IoMdKeypad} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>USSD UX Designer</Text>
                <Text size={'6'}>Osanim Systems</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={PiFlowerLotus} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>Agri-Business Technology</Text>
                <Text size={'6'}>Growforme Limited</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={BsTools} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>Handyman Platform</Text>
                <Text size={'6'}>Shabo Gigs (myShabo)</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={IoWalletOutline} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>Payment Mobile App</Text>
                <Text size={'6'}>XPay - Osanim Systems</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box>
        <Box   p={'5'} minHeight={'200px'}>
          <Flex direction={'column'} gap={'2'} >
            <Flex flexShrink={'0'} gap={'5'} align={'center'}>
              <Icon as={BsWindowStack} boxSize={12} />
              <Flex direction={'column'} >
                <Text size={'7'}>OS as a Service</Text>
                <Text size={'6'}>OsanimOS</Text>
              </Flex >
            </Flex>
            <Flex flexGrow={'1'} direction={'column'} gap={'5'} align={'start'}>
              <Text size={'5'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              <Flex >
                <Button as={NextLink} href={'/portfolio/1234'} size={'1'}>Read More ...</Button>
                <Button as={NextLink} href={'https://osanim.com'} target={'_blank'} variant={'outline'} size={'1'}>View Project</Button>
              </Flex >
            </Flex>
          </Flex>
        </Box> */}
      </Grid>


    </>
  )
}
