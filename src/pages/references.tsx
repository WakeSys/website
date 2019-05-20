import React, { useState } from 'react';
import { BasicTemplate } from '../templates/basicTemplate';
import { Header, HeaderType } from '../components/header/header';
import { Headline } from '../components/headline/headline';
import { ReferenceTileList } from '../components/referenceTile/referenceTileList';
import { SectionWrapper } from '../components/sectionWrapper/sectionWrapper';
import { Paragraph, ParagraphAlignment } from '../components/paragraph/paragraph';
import { Content } from '../components/content/content';
import { Button } from '../components/button/button';
import { ContactForm } from '../components/contactForm/contactForm';
import { Overlay } from '../components/overlay/overlay';

const liquidLeisure = require('../components/assets/references/liquidleisure.png');
const twpLumlukka = require('../components/assets/references/lumlukka.png');
const theBricks = require('../components/assets/references/thebricks.png');
const wasserskiHamburg = require('../components/assets/references/wasserski-hamburg.png');
const wakeparadise = require('../components/assets/references/wakeparadise.png');
const area47 = require('../components/assets/references/area47.png');
const waky = require('../components/assets/references/waky.png');
const wasserskiLangenfeld = require('../components/assets/references/wasserski-langenfeld.png');
const wakeBeach257 = require('../components/assets/references/wakebeach-257.png');
const wakeToolz = require('../components/assets/references/waketoolz-wakepark.png');
const triolago = require('../components/assets/references/triolago.png');
const outsider = require('../components/assets/references/outsider.png');
const stawiki = require('../components/assets/references/stawiki.png');
const hannams = require('../components/assets/references/hannams.png');
const twpPattaya = require('../components/assets/references/pattaya.png');
const wakeAndGroove = require('../components/assets/references/wakeandgroove.png');
const roseland = require('../components/assets/references/roseland.png');
const twincable = require('../components/assets/references/twincable.png');
const twpKorat = require('../components/assets/references/korat.png');
const toeppersee = require('../components/assets/references/toeppersee.png');
const wakeupcable = require('../components/assets/references/wakeupcable.png');
const wasserskiWinterberg = require('../components/assets/references/wasserski-winterberg.png');
const wakePark = require('../components/assets/references/wake-park.png');
const nextLevelRide = require('../components/assets/references/nextlevelrideaustin.png');
const wakeparkJeziorsko = require('../components/assets/references/wakepark-jeziorsko.png');
const iwpphuket = require('../components/assets/references/iwpphuket.png');
const dock5 = require('../components/assets/references/dock5.png');
const texasskiranch = require('../components/assets/references/texasskiranch.png');
const nonaadventurepark = require('../components/assets/references/nonaadventurepark.png');
const wakeparkBrombachsee = require('../components/assets/references/wakepark-brombachsee.png');

const wakeupdocklands = require('../components/assets/references/wakeupdocklands.png');
const valleywakepark = require('../components/assets/references/valleywakepark.png');
const wakeandski = require('../components/assets/references/wakeandski.png');
const wakeport = require('../components/assets/references/wakeport.png');
const pembrokeshirewakepark = require('../components/assets/references/pembrokeshirewakepark.png');
const parisWakepark = require('../components/assets/references/paris-wakepark.png');
const lagunencablepark = require('../components/assets/references/lagunencablepark.png');
const malmowakepark = require('../components/assets/references/malmowakepark.png');
const ldbwakeschool = require('../components/assets/references/ldbwakeschool.png');

const rixen = require('../components/assets/references/rixen.png');
const sesitec = require('../components/assets/references/sesitec.png');
const wakeparx = require('../components/assets/references/wakeparx.png');
const wakestation = require('../components/assets/references/wakestation.png');
const pentasi = require('../components/assets/references/pentasi.png');
const alta = require('../components/assets/references/alta.png');
const konex = require('../components/assets/references/konex.png');

const REFERENCES_FULL_SIZE = [
  {
    imageUrl: liquidLeisure,
    altAttribute: 'liquid leisure - logo',
    youtubeId: 'BsuGRTDEUGM'
  },
  {
    imageUrl: twpLumlukka,
    altAttribute: 'twp Lumlukka logo',
    href: 'https://www.thaiwakepark.com/'
  },
  {
    imageUrl: theBricks,
    altAttribute: 'the bricks - logo',
    href: 'https://www.wasserski-wedau.de/'
  },
  {
    imageUrl: wasserskiHamburg,
    altAttribute: 'Wasserski Hamburg - logo',
    href: 'https://wasserski-hamburg.de/'
  },
  {
    imageUrl: wakeparadise,
    altAttribute: 'wakeparadise - logo',
    youtubeId: 'xU9Xz-DPxhQ'
  },
  {
    imageUrl: area47,
    altAttribute: 'area47 - logo',
    youtubeId: 'A6GOvi84so0'
  },
  {
    imageUrl: waky,
    altAttribute: 'waky - logo',
    href: 'https://wakymarrakech.com/'
  },
  {
    imageUrl: wasserskiLangenfeld,
    altAttribute: 'Wasserski Langenfelde - logo',
    href: 'https://www.wasserski-langenfeld.de/home-en.html'
  },
  {
    imageUrl: wakeBeach257,
    altAttribute: 'Wake beach 257 - logo',
    youtubeId: 'BsuGRTDEUGM'
  },
  {
    imageUrl: wakeToolz,
    altAttribute: 'Wake Toolz - logo',
    href: 'https://www.waketoolz-wakepark.de/'
  },
  {
    imageUrl: triolago,
    altAttribute: 'triolago - logo',
    href: 'http://www.wakepark-triolago.de/'
  },
  {
    imageUrl: outsider,
    altAttribute: 'the outsider - logo',
    href: 'https://theoutsidervlaamseardennen.be/nl/aanbod/cablepark'
  },
  {
    imageUrl: stawiki,
    altAttribute: 'stawiki - logo',
    href: 'http://wake-zone.pl/'
  },
  {
    imageUrl: hannams,
    altAttribute: 'hannams - logo',
    href: 'https://hannamswakehub.com/'
  },
  {
    imageUrl: twpPattaya,
    altAttribute: 'twp Pattaya - logo',
    href: 'https://www.thaiwakepark.com/'
  },
  {
    imageUrl: wakeAndGroove,
    altAttribute: 'Wake & Groove - logo',
    href: 'http://www.wakeandgroove.de/'
  },
  {
    imageUrl: twincable,
    altAttribute: 'twin cable beckum - logo',
    href: 'https://www.twincable-beckum.de/'
  },
  {
    imageUrl: twpKorat,
    altAttribute: 'twp korat - logo',
    href: 'https://www.thaiwakepark.com/'
  },
  {
    imageUrl: toeppersee,
    altAttribute: 'Toeppersee Wakeboard - Wasserski- Freizeitanalge - logo',
    href: 'https://toeppersee.de/'
  },
  {
    imageUrl: wakeupcable,
    altAttribute: 'wakeupcable - logo',
    href: 'http://www.wakeupcable.be/'
  },
  {
    imageUrl: wakePark,
    altAttribute: 'Wake Park - logo',
    href: 'https://wake-park.nl/'
  },
  {
    imageUrl: nextLevelRide,
    altAttribute: 'Next level ride - logo',
    href: 'https://nextlevelrideaustin.com/'
  },
  {
    imageUrl: wakeparkJeziorsko,
    altAttribute: 'Wakepark Jeziorsko - logo',
    href: '#'
  },
  {
    imageUrl: iwpphuket,
    altAttribute: 'IWP - logo',
    href: 'http://www.iwpphuket.com/'
  },
  {
    imageUrl: dock5,
    altAttribute: 'Dock5 - logo',
    href: 'http://dock5.eu/'
  },
  {
    imageUrl: texasskiranch,
    altAttribute: 'texas ski ranch - logo',
    href: 'https://www.texasskiranch.com/'
  },
  {
    imageUrl: nonaadventurepark,
    altAttribute: 'Nona adventure park - logo',
    href: 'https://www.nonaadventurepark.com/'
  },
  {
    imageUrl: wakeparkBrombachsee,
    altAttribute: 'Wakepark Brombachsee - logo',
    href: 'https://www.wakepark-brombachsee.de'
  }
];

const REFERENCES_TWO_TOWER = [
  {
    imageUrl: wakeupdocklands,
    altAttribute: 'wakeupdocklands - logo',
    href: 'https://www.wakeupdocklands.com/'
  },
  {
    imageUrl: valleywakepark,
    altAttribute: 'valleywakepark - logo',
    href: 'https://www.valleywakepark.com/'
  },
  {
    imageUrl: wakeandski,
    altAttribute: 'wakeandski - logo',
    href: 'https://www.wakeandski.ch/'
  },
  {
    imageUrl: wakeport,
    altAttribute: 'wakeport - logo',
    href: 'https://wakeport.de/'
  },
  {
    imageUrl: pembrokeshirewakepark,
    altAttribute: 'pembrokeshire wakepark - logo',
    href: 'https://www.pembrokeshirewakepark.co.uk/'
  },
  {
    imageUrl: parisWakepark,
    altAttribute: 'Paris Wakepark - logo',
    href: 'http://www.paris-wakepark.fr/'
  },
  {
    imageUrl: lagunencablepark,
    altAttribute: 'Lagunen - logo',
    href: 'http://www.lagunencablepark.se/'
  },
  {
    imageUrl: malmowakepark,
    altAttribute: 'Malmø wakepark - logo',
    href: 'https://www.malmowakepark.se/'
  },
  {
    imageUrl: ldbwakeschool,
    altAttribute: 'ldbwakeschool - logo',
    href: 'https://www.ldbwakeschool.co.uk/'
  }
];

const REFERENCES_MANUFACTURES = [
  {
    imageUrl: rixen,
    altAttribute: 'Rixen - logo',
    href: 'https://www.rixencableway.com/'
  },
  {
    imageUrl: sesitec,
    altAttribute: 'Sesitec - logo',
    href: 'https://www.sesitec.com/'
  },
  {
    imageUrl: wakeparx,
    altAttribute: 'Wakeparx - logo',
    href: 'http://www.wakeparx.com/'
  },
  {
    imageUrl: wakestation,
    altAttribute: 'Wakestation - logo',
    href: 'http://wakestation.com/'
  },
  {
    imageUrl: pentasi,
    altAttribute: 'pentasi cable wake co - logo',
    href: 'http://pentasi.eu/'
  },
  {
    imageUrl: alta,
    altAttribute: 'alta cableski bu - logo',
    href: 'https://www.altacableski.nl/'
  },
  {
    imageUrl: konex,
    altAttribute: 'Konex - logo',
    href: 'https://konexwakeparks.com'
  }
];

const References: React.FunctionComponent = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const closeOverlay = () => setIsOverlayOpen(false);

  const openOverlay = () => setIsOverlayOpen(true);
  return (
    <BasicTemplate>
      <Header type={HeaderType.GREY}>
        <Headline type="h1">References</Headline>
        <Paragraph isInverse isInHeader alignment={ParagraphAlignment.CENTER}>
          The ideal solution for wakeboard cable parks, aqua parks and surf parks of any size
        </Paragraph>
      </Header>
      <SectionWrapper alignment="column">
        <Headline type="h2" alignment="center">
          Full-Size Wakeboard Cable Parks using WakeSys
        </Headline>
        <ReferenceTileList reference={REFERENCES_FULL_SIZE} />
      </SectionWrapper>
      <SectionWrapper fullWidth withBackground>
        <Content size="100" alignment="center">
          <Headline type="h2" alignment="center">
            Ready to get WakeSys at your park?
          </Headline>
          <Paragraph alignment={ParagraphAlignment.CENTER}>request your free demo and guided walk-through today!</Paragraph>
          <Button onClick={openOverlay} label="Get in touch" buttonType="primary" />
        </Content>
      </SectionWrapper>
      <SectionWrapper alignment="column">
        <Headline type="h2" alignment="center">
          Two-Tower Wakeboard Parks using WakeSys
        </Headline>
        <ReferenceTileList reference={REFERENCES_TWO_TOWER} />
      </SectionWrapper>
      <SectionWrapper alignment="column" withBackground fullWidth>
        <Content size="100">
          <Headline type="h2" alignment="center">
            Wakeboard Cable park manufacturers recommending WakeSys as the management software of choice
          </Headline>
          <ReferenceTileList reference={REFERENCES_MANUFACTURES} />
        </Content>
      </SectionWrapper>
      {isOverlayOpen && <Overlay children={<ContactForm />} onCloseClick={closeOverlay} />}
    </BasicTemplate>
  );
};

export default References;
