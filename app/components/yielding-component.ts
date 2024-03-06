import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';

interface InputSelectSignature<R extends boolean> {
  Args: {
    items: (number | string)[];
    required?: R;
    itemSelected?: (
      value: R extends true ? string | number : string | number | undefined,
    ) => void;
  };
  Element: HTMLSelectElement;
}

class InputSelectComponent<R extends boolean> extends Component<
  InputSelectSignature<R>
> {}

export interface YieldingSignature {
  Blocks: {
    default: [
      element1: WithBoundArgs<
        typeof InputSelectComponent,
        'items' | 'required'
      >,
    ];
  };
}

export default class YieldingComponent extends Component<YieldingSignature> {
  inputSelect = InputSelectComponent;

  get numbers(): number[] {
    return [1, 2, 3];
  }

  itemSelected = (value: string | number) => {
    // do nothing
  };

  itemOrNothingSelected = (value: string | number | undefined) => {
    // do nothing
  };
}
