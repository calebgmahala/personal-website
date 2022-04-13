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
 * Basic Site Information
 *
 *
 */
export interface BasicSiteInformation extends SanityDocument {
  _type: "basicSiteInformation";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternate text — `string`
     *
     *
     */
    alt: string;
  };

  /**
   * Favicon — `image`
   *
   *
   */
  favicon: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Primary Color 1 — `color`
   *
   *
   */
  primaryColor1: Color;

  /**
   * Primary Color 2 — `color`
   *
   *
   */
  primaryColor2: Color;

  /**
   * Primary Color 3 — `color`
   *
   *
   */
  primaryColor3?: Color;

  /**
   * Secondary Color 1 — `color`
   *
   *
   */
  secondaryColor1?: Color;

  /**
   * Secondary Color 2 — `color`
   *
   *
   */
  secondaryColor2?: Color;

  /**
   * Secondary Color 3 — `color`
   *
   *
   */
  secondaryColor3?: Color;
}

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

export type Color = {
  _type: "color";
  /**
   * Light Mode — `colorPicker`
   *
   *
   */
  light: ColorPicker;

  /**
   * Dark Mode — `colorPicker`
   *
   *
   */
  dark?: ColorPicker;
};

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

export type Documents = BasicSiteInformation | Homepage;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type ColorPicker = any;
