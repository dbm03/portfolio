'use client';
import { Card } from "@heroui/react";
import dynamic from 'next/dynamic';
const ContributionGraphWidget = dynamic(
  () => import('@/components/widgets/ContributionGraphWidget'),
  {
    ssr: false,
  },
);

export default function ContributionGraphCard() {
  return (
    <Card
      as={'article'}
      shadow="sm"
      fullWidth
      classNames={{
        base: 'h-full',
      }}
    >
      <ContributionGraphWidget />
    </Card>
  );
}
