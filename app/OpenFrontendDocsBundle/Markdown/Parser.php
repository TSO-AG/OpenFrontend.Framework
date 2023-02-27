<?php

namespace OpenFrontendDocsBundle\Markdown;

use Sculpin\Bundle\MarkdownBundle\PhpMarkdownExtraParser;

class Parser extends PhpMarkdownExtraParser
{
    public function doExtraAttributes($tag_name, $attr, $defaultIdValue = null, $classes = array())
    {
        if ('code' === $tag_name) {
            if (0 !== \count($classes)) {
                return ' data-of-highlight="' . $classes[0] . '"';
            }

            return ' data-of-highlight';
        }

        return parent::doExtraAttributes($tag_name, $attr, $defaultIdValue, $classes);
    }
}