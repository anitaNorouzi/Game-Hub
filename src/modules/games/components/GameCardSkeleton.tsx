import { Skeleton } from "@mantine/core";

const GameCardSkeleton = () => {
  return (
    <div className="rounded-lg border p-4">
      <Skeleton height={192} radius="md" />
      <Skeleton height={28} width="70%" mt="sm" />
      <Skeleton height={24} width="35%" />
      <Skeleton height={24} width="85%" />
      <div className="flex justify-between">
        <Skeleton height={12} width={72} />
        <Skeleton height={22} width={36} radius="xs" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
