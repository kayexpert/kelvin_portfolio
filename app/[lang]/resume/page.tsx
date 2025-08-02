import { Heading,  Text,  Separator, Grid, Badge, Flex, Progress } from '@radix-ui/themes'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const t = await getTranslations('resume_page')
  return {
  title: `${t('meta_title')}`,
  description: t('site_description'),
  icons: ['favicon.ico'],
  keywords: ['Kelvin Obodai'],
  openGraph: {
    type: 'website',
    title: `${t('meta_title')}`,
    description: t('site_description'),
    url: `${process.env.SERVER_URL}/resume`,
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

export default async function Resume() {
  const t = await getTranslations('resume_page')
  return (
   <>
    <Flex  mb={'5'} gap={'5'} align={'center'}>
      <Heading style={{ viewTransitionName: `page_title`, whiteSpace: 'nowrap' }}>{t('resume')}</Heading>
      <Separator size={'4'}  />
      </Flex >
      <Flex direction={'column'} gap={'5'} pt={'5'}>
        <Grid columns={{initial:'1', md:'2'}} gap={'5'}>
          <Flex direction={'column'}>
            <Flex ><Text weight={'bold'} size={'6'}>{t('education')}</Text></Flex >
            <Separator size={'4'} my={'2'}/>
            <Flex direction={'column'} gap={'1'} pt={'2'}>
                <Text weight={'bold'}>{t('bachelor_of_science_ba')}</Text>
                <Text size={'1'} color={'gray'} >University of Ghana - Legon, Ghana</Text>
            </Flex>
            <Flex direction={'column'} gap={'1'} pt={'2'}>
                <Text weight={'bold'}>{t('business')}</Text>
                <Text size={'1'} color={'gray'} >St. Martins Senior High School - Nsawam, Accra</Text>
            </Flex>
          </Flex>
          <Flex direction={'column'}>
            <Flex><Text weight={'bold'} size={'6'}>{t('expertise')}</Text></Flex>
            <Separator size={'4'} my={'2'}/>
            <Flex direction={'column'} gap={'6'} pt={'2'}>
              <Flex direction={'column'} gap={'1'}>
                <Text weight={'bold'}>{t('intern_2')}</Text>
                <Text size={'1'} color={'gray'} >Ga-West Municipal Hospital</Text>
              </Flex>
              <Flex direction={'column'} gap={'1'}>
                <Text weight={'bold'}>{t('intern_1')}</Text>
                <Text size={'1'} color={'gray'} >Ga-West Municipal Hospital</Text>
              </Flex>
              <Flex direction={'column'} gap={'1'}>
                <Text weight={'bold'}>{t('employee')}</Text>
                <Text size={'1'} color={'gray'} >Growforme Limited (growforme.com)</Text>
              </Flex>
            </Flex >
          </Flex >
        </Grid>
      </Flex >
      <Flex direction={'column'} gap={{initial:'5', md:'9'}} pt={'5'}>
        <Grid columns={{initial:'1', md:'2'}} gap={'5'}>
          <Flex direction={'column'}>
            <Flex ><Text weight={'bold'} size={'6'}>{t('working_skills')}</Text></Flex >
            <Separator size={'4'} my={'2'}/>
            <Flex direction={'column'} gap={'5'} pt={'2'}>
              <Flex direction={'column'}>
                <Flex justify={'between'}>
                  <Text>{t('core_support_skills')}</Text>
                  <Text>100%</Text>
                </Flex>
                <Progress value={100} size={'3'} color={'teal'} />
              </Flex >
              <Flex direction={'column'}>
                <Flex justify={'between'}>
                  <Text>{t('tools_platforms')}</Text>
                  <Text>60%</Text>
                </Flex>
                <Progress value={60} size={'3'} color={'blue'} />
              </Flex >
              <Flex direction={'column'}>
                <Flex justify={'between'}>
                  <Text>{t('performance_metrics')}</Text>
                  <Text>15%</Text>
                </Flex>
                <Progress value={15} size={'3'} color={'red'} />
              </Flex >
              <Flex direction={'column'}>
                <Flex justify={'between'}>
                  <Text>{t('automation_systems')}</Text>
                  <Text>20%</Text>
                </Flex>
                <Progress value={20} size={'3'} color={'purple'} />
              </Flex >
              <Flex direction={'column'}>
                <Flex justify={'between'}>
                  <Text>{t('administrative_assistance')}</Text>
                  <Text>20%</Text>
                </Flex>
                <Progress value={20} size={'3'} color={'amber'} />
              </Flex >
            </Flex >
          </Flex >
          <Flex direction={'column'}>
            <Flex > <Text weight={'bold'} size={'6'}>{t('knowledges')}</Text></Flex >
            <Separator size={'4'} my={'2'}/>
            <Flex  gap={'4'} wrap={'wrap'} pt={'2'}>
              <Badge size={'2'} color={'teal'}>Conflict Resolution</Badge>
              <Badge size={'2'} color={'teal'}>Customer Success</Badge>
              <Badge size={'2'} color={'teal'}>Client Retention</Badge>
              <Badge size={'2'} color={'teal'}>Customer Journeys</Badge>
              <Badge size={'2'} color={'teal'}>Zendesk</Badge>
              <Badge size={'2'} color={'teal'}>Bitrix</Badge>
              <Badge size={'2'} color={'teal'}>LiveChat</Badge>
              <Badge size={'2'} color={'teal'}>Google Workspace</Badge>
              <Badge size={'2'} color={'teal'}>Microsoft Office</Badge>
              <Badge size={'2'} color={'teal'}>Slack</Badge>
              <Badge size={'2'} color={'teal'}>Customer.io</Badge>
              <Badge size={'2'} color={'teal'}>Mailchimp</Badge>
              <Badge size={'2'} color={'teal'}>AI Chatbots</Badge>
              <Badge size={'2'} color={'teal'}>Helpdesk</Badge>
              <Badge size={'2'} color={'teal'}>Workflow Automation</Badge>
              <Badge size={'2'} color={'teal'}>Ticketing Systems</Badge>
              <Badge size={'2'} color={'teal'}>Remote Scheduling</Badge>
              <Badge size={'2'} color={'teal'}>Email Management</Badge>
              <Badge size={'2'} color={'teal'}>Data Entry</Badge>
              <Badge size={'2'} color={'teal'}>Research & Admin Support</Badge>
            </Flex >
          </Flex >
        </Grid>
      </Flex >
</> 
  )
}