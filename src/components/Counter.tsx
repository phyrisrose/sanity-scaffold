import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { increment, decrement, reset } from '@/store/slices/counterSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import styles from '@/styles/example.module.scss';

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Redux Counter</CardTitle>
        <CardDescription>State management with Redux Toolkit</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={() => dispatch(decrement())} className="h-12 w-12">
            <Minus className="h-4 w-4" />
          </Button>

          <div className={styles.title}>{count}</div>

          <Button variant="outline" size="icon" onClick={() => dispatch(increment())} className="h-12 w-12">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="secondary" onClick={() => dispatch(reset())} className="w-full">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};
