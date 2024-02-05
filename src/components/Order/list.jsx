import { ScrollView } from '../index';
import Order from './index';

export default function OrderList() {
  return (
    <ScrollView
      fluid
      background="light"
      hasPadding
      style={{ paddingBottom: 100 }}
    >
      {Array.from(Array(3)).map((item, index) => (
        <Order key={index} />
      ))}
    </ScrollView>
  );
}
