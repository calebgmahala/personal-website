import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Homepage
 *
 *
 */
export interface Homepage extends SanityDocument {
  _type: "homepage";

  /**
   * Metadata — `metadata`
   *
   *
   */
  metadata: Metadata;

  /**
   * Heading — `string`
   *
   *
   */
  heading: string;

  /**
   * Mission Statement — `array`
   *
   *
   */
  missionStatement?: Array<SanityKeyed<SanityBlock>>;
}

export type Metadata = {
  _type: "metadata";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Description — `string`
   *
   *
   */
  description: string;

  /**
   * Keywords — `string`
   *
   *
   */
  keywords?: string;

  /**
   * Author — `string`
   *
   *
   */
  author?: string;
};

export type Documents = Homepage;
