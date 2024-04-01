type Props = {
  params: {
    slug: string
  }
}

export default function Products({ params }: Props) {
  return <h1>Products: {params.slug}</h1>
}