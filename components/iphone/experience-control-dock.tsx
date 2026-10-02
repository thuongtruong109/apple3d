"use client";

import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, Scan } from "lucide-react";
import type { CSSProperties } from "react";
import { DeviceSelect } from "./device-select";
import type { Translation } from "./i18n";
import {
  productCategoryCatalog,
  type ProductCategory,
} from "./product-category-data";
import { ProductSelect } from "./product-select";
import {
  finishes,
  productCatalog,
  seriesCatalog,
  type Finish,
  type Model,
  type Series,
} from "./product-data";
import { SegmentedControl } from "./segmented-control";
import { SeriesSelect } from "./series-select";
import type { DuoPose } from "./three/official-models";

type ExperienceControlDockProps = {
  controls: Translation["controls"];
  finishNames: Translation["finishes"];
  category: ProductCategory;
  model: Model;
  finish: Finish;
  series: Series;
  availableFinishes: ReadonlyArray<Finish>;
  duoPose: DuoPose;
  exploded: boolean;
  hasCatalog: boolean;
  onCategoryChange: (category: ProductCategory) => void;
  onModelChange: (model: Model) => void;
  onFinishChange: (finish: Finish) => void;
  onDuoPoseChange: (pose: DuoPose) => void;
  onExplodedChange: (exploded: boolean) => void;
  onResetView: () => void;
};

export function ExperienceControlDock({
  controls,
  finishNames,
  category,
  model,
  finish,
  series,
  availableFinishes,
  duoPose,
  exploded,
  hasCatalog,
  onCategoryChange,
  onModelChange,
  onFinishChange,
  onDuoPoseChange,
  onExplodedChange,
  onResetView,
}: ExperienceControlDockProps) {
  return (
    <aside className="control-dock" aria-label={controls.panelLabel}>
      <div className="control-block control-block--product">
        <span className="control-caption">{controls.product}</span>
        <ProductSelect
          label={controls.product}
          value={category}
          onChange={onCategoryChange}
        />
      </div>

      {hasCatalog && (
        <>
          <div className="control-block control-block--series">
            <span className="control-caption">{controls.series}</span>
            <SeriesSelect
              label={controls.series}
              value={series}
              series={productCategoryCatalog[category].series}
              onChange={(next) => onModelChange(seriesCatalog[next].defaultModel)}
            />
          </div>

          <div className="control-block control-block--model">
            <span className="control-caption">{controls.model}</span>
            <DeviceSelect
              label={controls.model}
              value={model}
              models={seriesCatalog[series].models}
              onChange={onModelChange}
            />
          </div>

          <div className="control-block control-block--finish">
            <span className="control-caption">
              {controls.finish} · {finishNames[finish]}
            </span>
            <div className="finish-picker">
              {availableFinishes.map((finishId) => (
                <button
                  key={finishId}
                  className={finish === finishId ? "is-active" : ""}
                  onClick={() => onFinishChange(finishId)}
                  aria-label={controls.chooseFinish(finishNames[finishId])}
                  aria-pressed={finish === finishId}
                  style={
                    {
                      "--finish-color": finishes[finishId].color,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}

      {hasCatalog && productCatalog[model].isFoldable && (
        <div className="control-block control-block--fold">
          <span className="control-caption">{controls.pose}</span>
          <SegmentedControl
            label={controls.pose}
            name="duo-pose"
            value={duoPose}
            onChange={onDuoPoseChange}
            className="pose-picker"
            options={[
              { value: "closed", label: controls.closed },
              { value: "landscape", label: controls.landscape },
            ]}
          />
        </div>
      )}

      {hasCatalog && (
        <div className="control-actions">
          <span className="control-caption">{controls.action}</span>
          <div className="control-actions__buttons">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onExplodedChange(!exploded)}
              aria-label={exploded ? controls.collapse : controls.explode}
              aria-pressed={exploded}
              title={exploded ? controls.collapse : controls.explode}
            >
              {exploded ? (
                <Minimize2 aria-hidden="true" />
              ) : (
                <Maximize2 aria-hidden="true" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onResetView}
              aria-label={controls.resetView}
              title={controls.resetView}
            >
              <Scan aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
}
